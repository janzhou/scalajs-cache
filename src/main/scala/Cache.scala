package org.janzhou.scalajs

import scala.scalajs.js.Date
import org.scalajs.dom.window.localStorage
import upickle.default._

import scala.concurrent.Future
import scala.concurrent.ExecutionContext

object Cache {
  def apply(
    CacheKey:String,
    CacheSize:Int,
    DefaultExpiration:Double,
    BackendStore:String,
    AutoSave:Boolean
  ) = new Cache(CacheKey, CacheSize, DefaultExpiration, BackendStore, AutoSave)
}

/** A Scalajs Cache running in browser.
* @constructor Create a new cache with a name, size and default expiration time.
* @param CacheKey the name of the cache.
* @param CacheSize the max number of the cached items.
* @param DefaultExpiration the default expiration time of the cached items.
* @param BackendStore select backend Storage.
* @param AutoSave save automatically
*/
class Cache(
  val CacheKey:String,
  val CacheSize:Int,
  val DefaultExpiration:Double,
  val BackendStore:String,
  val AutoSave:Boolean
){
  assert(CacheKey.length > 0)
  assert(CacheSize > 0)
  assert(DefaultExpiration >= 0)
  assert(BackendStore == "mem" || BackendStore == "localStorage")

  private case class Item(data:String, time:Double) {
    def expired:Boolean = {
      time != 0 && time < Date.now()
    }
  }

  private var storage = scala.collection.mutable.Map[String, Item]()
  load()

  def load():Unit = if(BackendStore == "localStorage") {
    try {
      read[Seq[(String, Item)]](localStorage.getItem(CacheKey)).foreach{ case (key, item) => {
        storage += (key -> item)
      }}
    } catch {
      case e:Throwable => println(s"Cache $CacheKey load error")
    }
    val unexpired = storage.filter({case(key, item) => !item.expired})
    if(unexpired.size < storage.size){
      storage = unexpired
      if(AutoSave) save()
    }
  }

  def save():Unit = if(BackendStore == "localStorage") {
    if(CacheSize > storage.size) {
      try {
        if(storage.size == 0) {
          localStorage.removeItem(CacheKey)
        } else localStorage.setItem(CacheKey, write(storage.toSeq))
      } catch {
        case e:Throwable => println(s"Cache $CacheKey save error")
      }
    } else evict()
  }

  /** Remove last cache. */
  def evict():Cache = {
    storage.size match {
      case 0 => storage.empty
      case 1 => storage.empty
      case _:Int => {
        var selected = storage.head
        storage.foreach(map => {
          selected = if ( map._2.time < selected._2.time && map._2.time != 0 ) {
            map
          } else selected
        })
        println(s"evict $selected")
        storage -= selected._1
      }
    }
    if(AutoSave) save()
    this
  }

  /** Return current size of the cache. */
  def size():Int = storage.size

  /** Remove all caches. */
  def rm():Cache = {
    storage = scala.collection.mutable.Map[String, Item]()
    if(AutoSave) save()
    this
  }

  /** Remove selected cache.
  * @param key name of the key.
  */
  def rm(key: String):Cache = {
    storage -= key
    if(AutoSave) save()
    this
  }

  /** Set the key with value.
  * @param key the key of the cached item.
  * @param value the value of the cached item.
  * @param expiry the expiration time of the cached item. If not provided or the given value is not larger than 0, the default expiration will be used.
  * @return the value of the cached item.
  */
  def set[Data:Writer](key:String, value:Data, expiry:Double = 0):Data = {
    storage += (key -> new Item(write(value), if(expiry <= 0) 0 else Date.now() + expiry))
    if(AutoSave) save()
    value
  }

  /** Get the value assigned to key.
  * @param key the key of the cached item.
  * @return Option of the value.
  */
  def get[Data: Reader](key: String):Option[Data] = {
    storage.get(key) match {
      case Some(item) => {
        if(item.expired) {
          storage -= key
          if(AutoSave) save()
          None
        } else {
          try {
            Some(read[Data](item.data))
          } catch {
            case _:Throwable => {
              rm(key)
              None
            }
          }
        }
      }
      case None => None
    }
  }

  /** Get the all the value of a given Data type.
  * @return A seq of the values.
  */
  def getAll[Data: Reader]:Seq[Data] = {
    val buf = scala.collection.mutable.ListBuffer.empty[Data]
    storage foreach { case (key, item) => {
      if(item.expired) {
        storage -= key
        if(AutoSave) save()
      } else {
        try {
          buf += read[Data](item.data)
        } catch {
          case _:Throwable => {}
        }
      }
    }}
    buf.toSeq
  }

  /**
  * Cache the result of a given function.
  * @param key the key of the cached item.
  * @param f the function to caculate the value.
  * @return the value of the key, or the return value of the function.
  */
  def apply[Data : Reader : Writer](key:String, f: => Data):Data = apply(key, DefaultExpiration, f)

  /**
  * Cache the result of a given function.
  * @param key the key of the cached item.
  * @param expiry the expiration time of the cached item.
  * @param f the function to caculate the value.
  * @return the value of the key, or the return value of the function.
  */
  def apply[Data : Reader : Writer](key:String, expiry:Double, f: => Data):Data = {
    get[Data](key) match {
      case Some(value) => value
      case None => {
        val value:Data = f
        set(key, value, expiry)
      }
    }
  }

  /**
  * Cache of a given future.
  * @param key the key of the cached item.
  * @param future the future returning the value.
  * @return the value of the key, or the return value of the future.
  */
  def apply[Data : Reader : Writer](key:String, future: => Future[Data])(implicit ec: ExecutionContext):Future[Data] = apply(key, DefaultExpiration, future)

  /**
  * Cache of a given future.
  * @param key the key of the cached item.
  * @param expiry the expiration time of the cached item.
  * @param future the future returning the value.
  * @return the value of the key, or the return value of the future.
  */
  def apply[Data : Reader : Writer](key:String, expiry:Double, future: => Future[Data])(implicit ec: ExecutionContext):Future[Data] = {
    get[Data](key) match {
      case Some(value) => Future(value)
      case None => future.map(value => {
        set(key, value, expiry)
      })
    }
  }
}

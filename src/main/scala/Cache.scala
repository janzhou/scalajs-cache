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
    DefaultExpiration:Double
  ) = new Cache(CacheKey, CacheSize, DefaultExpiration)
}

class Cache(
  val CacheKey:String,
  val CacheSize:Int,
  val DefaultExpiration:Double
){
  assert(CacheKey.length > 0)
  assert(CacheSize > 0)
  assert(DefaultExpiration >= 0)

  private case class Item(data:String, time:Double) {
    def expired:Boolean = {
      time != 0 && time < Date.now()
    }
  }

  private var storage = scala.collection.mutable.Map[String, Item]()
  load()

  def load():Unit = {
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
      save()
    }
  }

  def save():Unit = {
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

  def evict():Unit = {
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
    save()
  }

  def size():Unit = storage.size

  def rm():Unit = {
    storage = scala.collection.mutable.Map[String, Item]()
    save()
  }

  def rm(key: String):Unit = {
    storage -= key
    save()
  }

  def set[Data:Writer](key:String, value:Data, expiry:Double = 0):Data = {
    storage += (key -> new Item(write(value), if(expiry <= 0) 0 else Date.now() + expiry))
    save()
    value
  }

  def get[Data: Reader](key: String):Option[Data] = {
    storage.get(key) match {
      case Some(item) => {
        if(item.expired) {
          storage -= key
          save()
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

  def apply[Data : Reader : Writer](key:String, f: => Data):Data = apply(key, DefaultExpiration, f)
  def apply[Data : Reader : Writer](key:String, expiry:Double, f: => Data):Data = {
    get[Data](key) match {
      case Some(value) => value
      case None => {
        val value:Data = f
        set(key, value, expiry)
      }
    }
  }

  def apply[Data : Reader : Writer](key:String, future: => Future[Data])(implicit ec: ExecutionContext):Future[Data] = apply(key, DefaultExpiration, future)
  def apply[Data : Reader : Writer](key:String, expiry:Double, future: => Future[Data])(implicit ec: ExecutionContext):Future[Data] = {
    get[Data](key) match {
      case Some(value) => Future(value)
      case None => future.map(value => {
        set(key, value, expiry)
      })
    }
  }
}

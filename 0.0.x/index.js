Index.PACKAGES = {"org" : [], "org.janzhou" : [], "org.janzhou.scalajs" : [{"name" : "org.janzhou.scalajs.Cache", "shortDescription" : "", "object" : "org\/janzhou\/scalajs\/Cache$.html", "members_class" : [{"label" : "apply", "tail" : "(key: String, expiry: Double, future: ⇒ Future[Data])(arg0: upickle.default.Reader[Data], arg1: upickle.default.Writer[Data], ec: ExecutionContext): Future[Data]", "member" : "org.janzhou.scalajs.Cache.apply", "link" : "org\/janzhou\/scalajs\/Cache.html#apply[Data](key:String,expiry:Double,future:=>scala.concurrent.Future[Data])(implicitevidence$9:upickle.default.Reader[Data],implicitevidence$10:upickle.default.Writer[Data],implicitec:scala.concurrent.ExecutionContext):scala.concurrent.Future[Data]", "kind" : "def"}, {"label" : "apply", "tail" : "(key: String, future: ⇒ Future[Data])(arg0: upickle.default.Reader[Data], arg1: upickle.default.Writer[Data], ec: ExecutionContext): Future[Data]", "member" : "org.janzhou.scalajs.Cache.apply", "link" : "org\/janzhou\/scalajs\/Cache.html#apply[Data](key:String,future:=>scala.concurrent.Future[Data])(implicitevidence$7:upickle.default.Reader[Data],implicitevidence$8:upickle.default.Writer[Data],implicitec:scala.concurrent.ExecutionContext):scala.concurrent.Future[Data]", "kind" : "def"}, {"label" : "apply", "tail" : "(key: String, expiry: Double, f: ⇒ Data)(arg0: upickle.default.Reader[Data], arg1: upickle.default.Writer[Data]): Data", "member" : "org.janzhou.scalajs.Cache.apply", "link" : "org\/janzhou\/scalajs\/Cache.html#apply[Data](key:String,expiry:Double,f:=>Data)(implicitevidence$5:upickle.default.Reader[Data],implicitevidence$6:upickle.default.Writer[Data]):Data", "kind" : "def"}, {"label" : "apply", "tail" : "(key: String, f: ⇒ Data)(arg0: upickle.default.Reader[Data], arg1: upickle.default.Writer[Data]): Data", "member" : "org.janzhou.scalajs.Cache.apply", "link" : "org\/janzhou\/scalajs\/Cache.html#apply[Data](key:String,f:=>Data)(implicitevidence$3:upickle.default.Reader[Data],implicitevidence$4:upickle.default.Writer[Data]):Data", "kind" : "def"}, {"label" : "get", "tail" : "(key: String)(arg0: upickle.default.Reader[Data]): Option[Data]", "member" : "org.janzhou.scalajs.Cache.get", "link" : "org\/janzhou\/scalajs\/Cache.html#get[Data](key:String)(implicitevidence$2:upickle.default.Reader[Data]):Option[Data]", "kind" : "def"}, {"label" : "set", "tail" : "(key: String, value: Data, expiry: Double)(arg0: upickle.default.Writer[Data]): Data", "member" : "org.janzhou.scalajs.Cache.set", "link" : "org\/janzhou\/scalajs\/Cache.html#set[Data](key:String,value:Data,expiry:Double)(implicitevidence$1:upickle.default.Writer[Data]):Data", "kind" : "def"}, {"label" : "rm", "tail" : "(key: String): Cache", "member" : "org.janzhou.scalajs.Cache.rm", "link" : "org\/janzhou\/scalajs\/Cache.html#rm(key:String):org.janzhou.scalajs.Cache", "kind" : "def"}, {"label" : "rm", "tail" : "(): Cache", "member" : "org.janzhou.scalajs.Cache.rm", "link" : "org\/janzhou\/scalajs\/Cache.html#rm():org.janzhou.scalajs.Cache", "kind" : "def"}, {"label" : "size", "tail" : "(): Int", "member" : "org.janzhou.scalajs.Cache.size", "link" : "org\/janzhou\/scalajs\/Cache.html#size():Int", "kind" : "def"}, {"label" : "evict", "tail" : "(): Cache", "member" : "org.janzhou.scalajs.Cache.evict", "link" : "org\/janzhou\/scalajs\/Cache.html#evict():org.janzhou.scalajs.Cache", "kind" : "def"}, {"member" : "org.janzhou.scalajs.Cache#<init>", "error" : "unsupported entity"}, {"label" : "DefaultExpiration", "tail" : ": Double", "member" : "org.janzhou.scalajs.Cache.DefaultExpiration", "link" : "org\/janzhou\/scalajs\/Cache.html#DefaultExpiration:Double", "kind" : "val"}, {"label" : "CacheSize", "tail" : ": Int", "member" : "org.janzhou.scalajs.Cache.CacheSize", "link" : "org\/janzhou\/scalajs\/Cache.html#CacheSize:Int", "kind" : "val"}, {"label" : "CacheKey", "tail" : ": String", "member" : "org.janzhou.scalajs.Cache.CacheKey", "link" : "org\/janzhou\/scalajs\/Cache.html#CacheKey:String", "kind" : "val"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "org\/janzhou\/scalajs\/Cache.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "org\/janzhou\/scalajs\/Cache.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "org\/janzhou\/scalajs\/Cache.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "org\/janzhou\/scalajs\/Cache.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "org\/janzhou\/scalajs\/Cache.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "org\/janzhou\/scalajs\/Cache.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "org\/janzhou\/scalajs\/Cache.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/janzhou\/scalajs\/Cache.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/janzhou\/scalajs\/Cache.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/janzhou\/scalajs\/Cache.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "org\/janzhou\/scalajs\/Cache.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "org\/janzhou\/scalajs\/Cache.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "org\/janzhou\/scalajs\/Cache.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "org\/janzhou\/scalajs\/Cache.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "org\/janzhou\/scalajs\/Cache.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "org\/janzhou\/scalajs\/Cache.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "org\/janzhou\/scalajs\/Cache.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "org\/janzhou\/scalajs\/Cache.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "org\/janzhou\/scalajs\/Cache.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "members_object" : [{"label" : "apply", "tail" : "(CacheKey: String, CacheSize: Int, DefaultExpiration: Double): Cache", "member" : "org.janzhou.scalajs.Cache.apply", "link" : "org\/janzhou\/scalajs\/Cache$.html#apply(CacheKey:String,CacheSize:Int,DefaultExpiration:Double):org.janzhou.scalajs.Cache", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "org\/janzhou\/scalajs\/Cache$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "org\/janzhou\/scalajs\/Cache$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "org\/janzhou\/scalajs\/Cache$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "org\/janzhou\/scalajs\/Cache$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "org\/janzhou\/scalajs\/Cache$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "org\/janzhou\/scalajs\/Cache$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "org\/janzhou\/scalajs\/Cache$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/janzhou\/scalajs\/Cache$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/janzhou\/scalajs\/Cache$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/janzhou\/scalajs\/Cache$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "org\/janzhou\/scalajs\/Cache$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "org\/janzhou\/scalajs\/Cache$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "org\/janzhou\/scalajs\/Cache$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "org\/janzhou\/scalajs\/Cache$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "org\/janzhou\/scalajs\/Cache$.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "org\/janzhou\/scalajs\/Cache$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "org\/janzhou\/scalajs\/Cache$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "org\/janzhou\/scalajs\/Cache$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "org\/janzhou\/scalajs\/Cache$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "class" : "org\/janzhou\/scalajs\/Cache.html", "kind" : "object"}]};
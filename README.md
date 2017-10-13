# Cache API for Scala.js backend by Window.localStorage

## Install

Add library and resolver in build.sbt

```scala
libraryDependencies ++= Seq(
  "org.janzhou" %%% "scalajs-cache" % "0.0.2"
)
resolvers += "Jian Zhou" at "https://raw.githubusercontent.com/janzhou/mvn-repo/release"
```

## Usage

### Create Cache

```scala
import org.janzhou.scalajs.Cache

object cached extends Cache("cached", 1000, 60 * 60 * 1000) {
  lazy val sub = Cache("cached.sub", 1000, 60 * 60 * 1000)

  def cleanAll = {
    rm()
    sub.rm()
  }
}
```

### Basic Usage

Store data into a "key". The data will be serialized by using [uPickle](https://github.com/lihaoyi/upickle-pprint).

```scala
cached.set("key", data)
```

The expiration data can be specified per-key.

```scala
cached.set("key", data, expiration)
```

### Advanced Usage

The Future object can be cached.

```scala
val newFuture = cached("future", Future{ real job })
```

This function will return a new Future with the cached value. Otherwise, the real job will be scheduled. This can be used in conjunction with a remote call.

Cache a lambda expression.

```scala
val newValue = cached("lambda", { real job })
```

This function will return the cached value. Otherwise, the real job will be executed.

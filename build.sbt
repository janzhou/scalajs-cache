lazy val root = (project in file(".")).settings(
  name := "scalajs-cache",
  organization := "org.janzhou",
  version := "0.0.x",
  scalaVersion := "2.11.8",
  sbtVersion := "0.13.11",
  scalacOptions ++= Seq(
    "-Yinline-warnings",
    "-optimise",
    "-feature",
    "-deprecation",
    "-Xmax-classfile-name", "100"
  ),
  libraryDependencies ++= Seq(
    "com.lihaoyi" %%% "upickle" % "0.4.3",
    "org.scala-js" %%% "scalajs-dom" % "0.9.1"
  )
).
enablePlugins(ScalaJSPlugin)

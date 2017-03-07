lazy val root = (project in file(".")).settings(
  name := "scalajs-cache",
  organization := "org.janzhou",
  version := "0.0.x",
  scalaVersion := "2.12.1",
  crossScalaVersions := Seq("2.11.8", "2.12.1"),
  sbtVersion := "0.13.11",
  scalacOptions ++= Seq(
    "-feature",
    "-deprecation",
    "-Xmax-classfile-name", "100"
  ),
  libraryDependencies ++= Seq(
    "com.lihaoyi" %%% "upickle" % "0.4.4",
    "org.scala-js" %%% "scalajs-dom" % "0.9.1"
  )
).
enablePlugins(ScalaJSPlugin)

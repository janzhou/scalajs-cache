lazy val root = (project in file(".")).settings(
  name := "scalajs-cache",
  organization := "org.janzhou",
  version := "0.0.2",
  scalaVersion := "2.12.2",
  crossScalaVersions := Seq("2.11.8", "2.12.2"),
  scalacOptions ++= Seq(
    "-feature",
    "-deprecation",
    "-Xmax-classfile-name", "100"
  ),
  scalacOptions in Compile in doc ++= Seq(
    "-doc-title", "Scala.js Cache",
    "-sourcepath", (baseDirectory in ThisBuild).value.toString,
    "-doc-source-url", s"https://github.com/janzhou/${name.value}/tree/${version.value}€{FILE_PATH}.scala"
  ),
  libraryDependencies ++= Seq(
    "com.lihaoyi" %%% "upickle" % "0.4.4",
    "org.scala-js" %%% "scalajs-dom" % "0.9.3"
  )
).
enablePlugins(ScalaJSPlugin)

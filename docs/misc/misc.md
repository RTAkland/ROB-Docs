# 杂项

如果你要在native平台上开发机器人，这里有我写好的几个库用来帮助你使用一些Kotlin官方没有给出的API

## zlib解压缩

> zlib和gzip不是一个东西, zlib常用于网络数据的压缩例如知名沙盒游戏: Minecraft(Java版) 的网络
> 数据包就是用到了zlib压缩， 而gzip是一种文件压缩的常见方式, 常见的压缩后的文件后缀名为: `.gz`。

Github地址: https://github.com/RTAkland/kzlib

> 它支持除wasm和wasi之外的所有Kotlin multiplatform的平台, 使用方法详见README

## 嵌入式资源

> 在Kotlin/Native中一个程序会被编译为一个可执行文件, 而这个文件和Jvm的`.jar`不同 jar本质上是一个压缩包
> Jvm虚拟机会读取这个压缩包内的`.class`文件和资源，然而在native平台中并没有这种API，但是可以换一种方法来实现：
> 既然只能存放代码，那就使用gradle插件把资源文件以代码的形式自动生成进一个kt文件内(可以使用zlib压缩)，编译时gradle会自动添加自动
> 生成的代码的代码集(sourceSet)到可知性文件内，再使用插件`runtime`提供的API来获取资源文件即可。

Github地址: https://github.com/RTAkland/KEmbeddableResources

> 需要使用`gradle8.10`及以上版本使用, 使用方法详见README

## 日志

> 如果你需要一个轻量级并且跨平台的日志库, 你可以选择`klogging`
> 它支持除wasi平台外的所有kotlin multiplatform平台使用, 使用方法详见README

Github地址: https://github.com/RTAkland/KLogging

# 最后

如果你有更多自己写的/别人写的库想要放在这里供其他人参考, 可以在[PR](https://github.com/RTAkland/ROB-Docs/pulls)中修改本文件
来添加

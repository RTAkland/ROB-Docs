# 概述

这个模块提供了对`RawFileEvent`的okio文件系统的保存文件支持,
并且提供了两个拓展函数用于将okio和kotlinx-io的Path对象互相转换

# 开始使用

```kotlin
sourceSets {
    commonMain {
        dependencies {
            // 这里的版本替换成最新版本
            implementation("cn.rtast.rob:ronebot-onebot-v11-okio:${version}")
        }
    }
}
```

> 最新版本可以在mavenCentral中搜索到

## 互相转换Path对象

```kotlin
import kotlinx.io.files.Path as KotlinXIOPath
import okio.Path as OkioPath

fun main() {
    val okioPath: OkioPath = KotlinXIOPath("example.txt").toOkioPath() // okio.Path
    val kotlinxPath: KotlinXIOPath = "example.txt".toKotlinIOPath() // kotlinx.io.files.Path
}
```
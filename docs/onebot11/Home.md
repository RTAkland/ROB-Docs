欢迎使用ROB！ 这是一个Kotlin的OneBot11 SDK开发框架并且支持多实例!

# 注意事项

1. ROB不是一个OneBot实现, 他的作用是连接到OneBot实现, 然后处理OneBot实现下发的消息。
2. ROB深度依赖于`Kotlinx.Coroutines`(Kotlin协程)所以只能在Kotlin中使用, 不能在Java中使用。
3. ROB在`v2.8.2`及以前的版本为纯Jvm库, 在`v2.9.0`及以上为KMP库, 支持`Windows(MinGWX64)`、`Linux(x64,armX64)`、
   `MacOs(X64, ArmX64)`、`Jvm`。
4. Jvm ROB所需的最低JDK版本为`11`
5. `ronebot-onebot-v11`兼容全部的Lagrange.OneBot的API并且兼容部分的其他OneBot实现的API, 不保证可用性, 有bug可以提issue

# 快速开始

模板项目生成器: [https://rob-starter.rtast.cn/](https://rob-starter.rtast.cn/)

## 添加Maven仓库

```kotlin
repositories {
    // 在2.9.1及以下版本需要添加这个仓库, 2.9.2以上则只需要添加mavenCentral即可
    // maven("https://repo.maven.rtast.cn/releases/")
    
    // 2.9.2以上
    mavenCentral()
}
```

## 添加依赖

### 旧版纯Jvm平台

```kotlin
dependencies {
    // 这里的版本替换成最新版本
    implementation("cn.rtast:ronebot-onebot-v11:${version}")
}
```

### 新版KMP平台

```kotlin
sourceSets {
    commonMain {
        dependencies {
           // 这里的版本替换成最新版本
           implementation("cn.rtast.rob:ronebot-onebot-v11:${version}")
        }
    }
}
```

或者支持其他平台

```kotlin
kotlin {
    linuxX64 {
        binaries.executable {
            entryPoint = "com.example.rob.examplerobproject.main"
        }
    }
    mingwX64 {
        binaries.executable {
            entryPoint = "com.example.rob.examplerobproject.main"
        }
    }
    jvm()

    sourceSets {
        commonMain {
            dependencies {
                implementation("cn.rtast.rob:ronebot-onebot-v11:${version}")
            }
        }
    }
}
```

# 最小实例

```kotlin
suspend fun main() {
    OneBotFactory.createClient("ws://127.0.0.1:6666", "1145141919810", object : OneBotListener {
        override suspend fun onGroupMessage(message: GroupMessage, json: String) {
            println(message.rawMessage)
        }
    })
}
```

> 注意: 在native平台上是没有办法将main函数作为挂起函数, 所以你需要手动创建一个协程作用域来创建客户端和服务端
> 例如使用`GlobalScope.launch {}`函数来创建一个协程作用域

# 加入交流群

[点击这里加群](https://qm.qq.com/q/KrmU7AjzuC)

<img src="https://github.com/user-attachments/assets/eabd622e-f38d-4541-9e27-7d9623a97805" width="200">

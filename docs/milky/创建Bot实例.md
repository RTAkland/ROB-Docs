# 创建Bot实例

ROB深度依赖Kotlin携程, 因此绝大多数的函数都需要在`suspend scope`(即`携程作用域`)
内调用。

所有的Bot都是从`MilkyBotFactory`工厂函数创建出来的, 在此之前你需要配置你的milky实现端
打开Websocket服务端并设置一个AccessToken。

```kotlin
fun main() {
    runBlocking {
        val bot = MilkyBotFactory.createBot("http://127.0.0.1:3000", "123456")
        bot.join()  // 记得在Bot创建完成后将其阻塞
    }
}
```

## 设置监听指定的群聊

```kotlin
bot.addListeningGroup(1357924680)
bot.addListeningGroups(123456789, 987654321)
```
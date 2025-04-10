# 概述

创建Bot实例需要通过`OneBotFactory`中的静态方法`createServer`或者`createClient`来创建，
他们不同的区别是:

`createServer` 创建的是一个Websocket服务器需要让OneBot实现开启`反向Websocket`来连接到ROB，
适用于ROB和OneBot实现在同一个机器的情况

`createClient` 创建的是一个Websocket客户端来连接到OneBot实现, 需要OneBot开启`正向Websocket`
适用于ROB和OneBot实现在同一个/不同机器的情况, 大部分情况下你只需要使用这种方式即可

# 创建客户端

```kotlin
suspend fun main() {
    val wsAddress = System.getenv("WS_ADDRESS")
    val wsAccessToken = System.getenv("WS_ACCESS_TOKEN")
    val instance1 = OneBotFactory.createClient(wsAddress, wsAccessToken, object : OneBotListener {
        override suspend fun onGroupMessage(message: GroupMessage) {
            println(message)
        }
    })
}
```

# 创建服务端

```kotlin
suspend fun main() {
    val bot = OneBotFactory.createServer(8888, "114514ghpA@")
}
```

# 设置OneBot下发的消息超时时间

```kotlin
suspend fun main() {
    // 设置客户端的方式也是一样，默认是0表示不设置超时时间
    val bot = OneBotFactory.createServer(8888, "114514ghpA@", messageExecuteDuration = 1.seconds)
}
```

如果一个消息超时了之后可以在`OneBotListener`或者`onEvent`监听 `onMessageTimeout`或者`MessageTimeoutEvent`

> 下发消息超时的意思是OneBot实现将消息下发给ROB之后用户处理这个事件/消息的时间超过设定的时间
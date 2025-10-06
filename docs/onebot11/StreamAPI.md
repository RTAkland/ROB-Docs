# StreamAPI

对接Napcat的Stream API

目前仅支持上传文件

```kotlin
class TestBot {

    private val testBytes = ByteArray(819200)  // 创建一个800kb ByteArray全部使用0填充

    @Test
    fun `test bot`() {
        runBlocking {
            val bot = OneBotFactory.createClient("ws://127.0.0.1:3001", "114514", logLevel = LogLevel.DEBUG)
            // 除直接上传ByteArray外还支持kotlinx.io.Path, 
            // 和kotlinx.io.Buffer | 在JVM平台支持java.ioFile
            println(bot.action.uploadFileStream(testBytes, "test.bin", fileRetention = 300 * 1000))  // 返回上传后的文件路径
        }
    }
}
```
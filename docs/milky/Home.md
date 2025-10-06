# ROoneBot-Milky 开发文档

> Milky协议 https://milky.ntqqrev.org/

`ROneBot-Milky` 是一个Kotlin(KMP)/Java的开发SDK支持多实例, 提供了简洁、多样和异步的各种函数来快速对接
milky协议进行开发QQ机器人并且支持Kotlin Multiplatform(多平台), 可以将机器人编译成
原生二进制文件以获得更好的性能。

> ROB为Kotlin开发者提供了更丰富和函数，推荐100% Kotlin语言进行开发机器人

# 快速浏览

> 如果你的Bot用到了`任何`Kotlin native平台, 请把下面的内容添加到你的`gradle.properties`中

```properties
# gradle.properties
org.gradle.jvmargs=-Xmx2g -XX:MaxMetaspaceSize=1g -Dfile.encoding=UTF-8
```

> 由于链接Kotlin native需要大量的内存, 你需要额外配置更多的堆内存让gradle成功链接出最终的二进制产物

> 下面是一些简单的示例, 同时提供Kotlin和Java版本

## 创建Bot

```kotlin
fun main() {
    runBlocking {
        val bot = MilkyBotFactory.createBot("http://127.0.0.1:3000", "114514")
        bot.addListeningGroup(1234567890)  // 设置需要监听的群聊
        bot.addListeningGroups(12345, 67890)
        bot.join()
    }
}
```

```java
public class CreateBot {
    public static void main(String[] args) {
        BotInstance bot = MilkyBotFactory.createBotBlocking("ws://127.0.0.1:3000", "114514");
        bot.addListeningGroup(1234567890);  // 设置需要监听的群聊
        bot.addListeningGroups(12345, 67890);
        bot.joinBlocking();
    }
}
```

## 监听事件

```kotlin
fun main() {
    runBlocking {
        val bot: BotInstance = ...
        with(bot.listener) {
            onGroupMessage {
                println(it.event.text)
            }
            onConnected {
                println("已连接到服务器")
            }
        }
        bot.subscribe<GroupMessageEvent> {
            println(it.event.reply("你好啊"))
        }
        bot.join()
    }
}
```

```java
public class EventListener {
    public static void main(String[] args) {
        BotInstance bot = ...
        MilkyListener listener = new MilkyListener(bot) {
            @Override
            public void onGroupMessage(@NotNull GroupMessageEvent event) {
                event.getEvent().replyAsync("Hello");
            }
        };
        bot.setListener(listener);
        bot.join();
    }
}
```

## 创建命令

```kotlin
fun main() {
    // 注册一个指令 在群聊发送`/hello` Bot则会返回 `Hello world`
    createCommand("/hello", BaseCommand.ExecuteType.Group) {
        println("Hello world")
    }.register()  // 自动注册
    
    // 注册一个指令 在私聊中发送 `/hi` 或 `/你好` Bot则会返回 `你好！`
    createCommand(listOf("/hi", "/你好"), BaseCommand.ExecuteType.Private) {
        println("你好！")
    }.register()
}
```

```java
public class CreateCommand {
    public static void main(String[] args) {
        CommandUtil.createCommand("/hello", request ->
                System.out.println(request.getMessage())
        ).register();
    }
}
```

> 除此之外还有更多快捷、实用以及高效的接口和函数, 后面的页面都是以Kotlin语言来作为示例(除一些Java特有的函数外会给出Java代码示例)

# 加入交流群

[点击这里加群](https://qm.qq.com/q/KrmU7AjzuC)

<img src="https://github.com/user-attachments/assets/eabd622e-f38d-4541-9e27-7d9623a97805" width="200">

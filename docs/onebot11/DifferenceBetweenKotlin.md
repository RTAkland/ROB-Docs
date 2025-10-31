> 该部分文档仅对2.9.4及以上的版本生效

# Java和Kotlin使用本框架之间的差异

# 命令

在Kotlin中你可以使用继承`BaseCommand`的方式来注册一个命令, 但是在Java中你只能使用
`Brigadier`来注册命令, 并且不支持会话(Session)

这是一个Java使用者的例子

```java
import cn.rtast.rob.command.BrigadierCommandManager;
import cn.rtast.rob.command.BrigadierCommandManagerImpl;
import cn.rtast.rob.command.Commands;
import com.mojang.brigadier.Command;
import com.mojang.brigadier.arguments.StringArgumentType;

import java.util.ArrayList;

public class Test {
    public static void main(String[] args) {
        // 首先获取brigadierCommandManager这个属性是lazy的所以只需要/只能获取一次, 单例使用
        BrigadierCommandManagerImpl brigadierCommandManager = BrigadierCommandManager.getBrigadierCommandManager();
        brigadierCommandManager.register(
                Commands.literal("echo")
                        .then(
                                Commands.argument("content", StringArgumentType.string())
                                        .executes(c -> {
                                            System.out.println("Hello" + StringArgumentType.getString(c, "content"));
                                            return Command.SINGLE_SUCCESS;
                                        })
                        ).executes(c -> {
                            System.out.println("Execute without args");
                            return Command.SINGLE_SUCCESS;
                        })
                // 创建别名, 默认添加上了@JvmOverloads注解可以不传入列表
                , new ArrayList<>());
    }
}
```

# Action对象

由于Kotlin的suspend方法在Java中无法直接使用, 所以使用到了
`kotlin-suspend-transform-compiler-plugin`编译器插件来自动的生成JvmAsync的JvmBlocking方法以便Java调用

下面是一些例子

```java
public class Main {
    public static void main(String[] args) {
        OneBotAction action = ...;
        action.sendGroupMessageAsyncJvmAsync(...);
        action.sendGroupMessageAsyncJvmBlocking(...);
    }
}
```

> 对于有返回值的函数仅会创建JvmBlocking结尾的普通函数, 如果有返回值则会同时创建`JvmAsync`和`JvmBlocking`两个函数

# 监听事件

在Java中监听事件和Kotlin中一致, 你需要实现`BlockingOneBotListener`而不是`OneBotListener`

```java
public class Test implements BlockingOneBotListener {
    @Override
    public void onGroupMessageBlocking(@NotNull GroupMessage message) {
        System.out.println(message);
    }
}
```

# 处理消息

对于一些Kotlin的拓展函数/拓展属性, 框架为Java使用者单独创建了成员函数或者
成员属性

下面是BaseMessage的成员属性

```kotlin
public fun getTexts(): List<String> = this.texts

public fun getText(): String = this.text

public fun getImages(): List<ImageSegment> = this.images

public fun getMFaces(): List<MFaceSegment> = this.mFaces

public fun getMFace(): MFaceSegment? = this.mFace

public fun getFaces(): List<FaceSegment> = this.faces

public fun filterJvm(type: SegmentType): List<ArrayMessage> = this.filter(type)

public fun filterAndSerializeJvm(type: SegmentType): List<MessageSegment> = this.filterAndSerialize(type)

public fun toPlainTextJvm(): String = this.text
```

# Resource对象

在发送图片之类的操作时需要创建`Resource`对象, 下面的示例提供了四种不同类型的重载

```java
public class Test {
    public static void main(String[] args) throws MalformedURLException {
        ResourceUtil.createResource(URI.create("..."));
        ResourceUtil.createResource(new URL("..."));
        ResourceUtil.createResource(InputStream.nullInputStream());
        ResourceUtil.createResource(Paths.get("..."));
    }
}
```
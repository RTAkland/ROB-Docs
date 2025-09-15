# 调用API

> milky模块和onebot11模块的API调用都是相同的, 从`*Action`类中调用方法，
> 在milky模块内的API所有返回值都使用`arrow-kt`封装, ronebot-milky模块
> 为Kotlin和Java使用分别设计了拓展/工具函数来快速获取返回值

# 具体使用

> 下面的例子都使用下面的API函数来作为调用示例, 这是示例函数的签名

```kotlin
@JvmBlocking
public suspend fun getLoginInfo(): Either<String, GetLoginInfo.LoginInfo>
```

> 这个函数编译为字节码后函数签名会变成下面的样子(简单示例)

```java
public Either<String, GetLoginInfo.LoginInfo> getLoginInfoBlocking();
```

## Kotlin使用者

```kotlin
val result: Either<String, GetLoginInfo.LoginInfo> = ...
val success = result.success()  // 这里会返回调用成功的结果, 也就是Either右侧的类型: GetLoginInfo.LoginInfo 
val successOrNull = result.successOrNull()  // 这里和上面一致，只是如果调用失败则返回null

val failure = result.failure()  // 这里返回调用失败的结果, 也就是Either左侧的类型: String(调用失败后Milky实现端返回的信息)
val failureOrNull = result.failureOrNull()  // 这里和上面一直, 只是如果调用成功则返回null
```

## Java使用者

```java
import cn.rtast.rob.milky.util.arrow.ArrowUtil;

Either<String, GetLoginInfo.LoginInfo> result = ...;

Either<String, GetLoginInfo.LoginInfo> success = ArrowUtil.getRight(result);
@Nullable Either<String, GetLoginInfo.LoginInfo> successOrNull = ArrowUtil.getRightOrNull(result);

String failure = ArrowUtil.getLeft(result);
@Nullable String failureOrNull = ArrowUtil.getLeftOrNull(result);
```

> 除此之外Java使用者也可以使用`arrow-kt`官方的API来获取结果, 成功的结果在`右侧`
在3.3.0版本以上(alpha)添加了对cloudflare worker部署的支持, 通过Kotlin/JS将Kotlin代码编译为js代码，
并使用Worker的Websocket API来接受websocket请求， 此版本仍处于早期开发中, 可能会有很多的Bug, 请勿在正式环境中部署你的机器人.

# 开始前的准备

如果需要尝试此版本你需要添加snapshots仓库, 并添加Kotlin/js的target

```kotlin
plugins {
    kotlin("multiplatform") version "2.2.21"
}

repositories {
    mavenCentral()
    maven("https://repo.maven.rtast.cn/releases")
}

kotlin {
    js(IR) {
        nodejs {
            binaries.executable()
        }
    }

    sourceSets {
        jsMain.dependencies {
            implementation("cn.rtast.rob:ronebot-onebot-v11:3.3.2")
        }
    }
}
```

你还需要安装wrangler来在本地运行你的worker程序

# 开始开发

在项目根目录创建一个wrangler.toml并按照[wrangler.toml](https://github.com/RTAkland/ROneBot/blob/f9b2cab2e5b15da2b7beb27c130b1df49f9b4a60/ronebot-onebot-v11/wrangler.template.toml)
配置修改部分信息。

添加以下gradle任务到build.gradle.kts中

```kotlin
val wranglerRunDir: Provider<Directory> = layout.buildDirectory.dir("wrangler-run")
tasks.register<Copy>("prepareWranglerRun") {
    group = "wrangler"
    dependsOn("compileDevelopmentExecutableKotlinJs")
    val buildOutputDir = layout.buildDirectory.dir("compileSync/js/main/developmentExecutable/kotlin")
    from(buildOutputDir)
    into(wranglerRunDir)
}

val wranglerDev by tasks.registering(Exec::class) {
    group = "wrangler"
    workingDir = layout.buildDirectory.dir("wrangler-run").get().asFile.apply { mkdirs() }
    doFirst {
        val sourceDir = project.layout.projectDirectory
        mapOf(
            sourceDir.file("wrangler.toml").asFile to File(workingDir, "wrangler.toml"),
            sourceDir.file(".dev.vars").asFile to File(workingDir, ".dev.vars"),
        ).forEach { (s, d) -> s.copyTo(d, overwrite = true) }
    }
    commandLine(
        if (System.getProperty("os.name").lowercase().contains("windows")) listOf(
            "cmd", "/c", "wrangler dev --port 7071"
        )
        else listOf("sh", "-c", "wrangler dev --port 7071")
    )
    standardInput = System.`in`
    isIgnoreExitValue = false
}

val wranglerDeployDir: Provider<Directory> = layout.buildDirectory.dir("wrangler-deploy")
    .apply { get().asFile.deleteRecursively() }
val prepareProductionDeploy by tasks.registering(Copy::class) {
    group = "wrangler"
    dependsOn("compileProductionExecutableKotlinJs")
    val buildOutputDir = layout.buildDirectory.dir("compileSync/js/main/productionExecutable/kotlin")
    from(buildOutputDir) { exclude("*.map") }
    into(wranglerDeployDir)
    from(layout.projectDirectory.file("wrangler.toml"))
    into(wranglerDeployDir)
}

val wranglerDeploy by tasks.registering(Exec::class) {
    group = "wrangler"
    dependsOn(prepareProductionDeploy)
    workingDir = layout.buildDirectory.dir("wrangler-deploy").get().asFile.apply { mkdirs() }
    commandLine(
        if (System.getProperty("os.name").lowercase().contains("windows")) listOf("cmd", "/c", "wrangler deploy")
        else listOf("sh", "-c", "wrangler deploy")
    )
    standardInput = System.`in`
}
```

> 这些任务可以快速帮助你运行/开发/部署

## 编写代码

```kotlin
/**
 * 不要修改这个函数的任何内容
 */
fun main() {
    @Suppress("unused_expression")
    val eventListener = EventListener { event ->
        val dyn = event.asDynamic()
        event.asDynamic().respondWith(handleRequest(dyn.request as Request))
        Unit
    }
    js("addEventListener('fetch', eventListener)")
}

/**
 * 在这里使用createWorkerBot特殊方法创建Bot后
 * 其余使用方法和常规ROB一致
 */
@JsExport
fun handleRequest(request: Request): Promise<Response> = GlobalScope.promise {
    OneBotFactory.createWorkerBot("a-secret-access-token", object : OneBotListener {
        override suspend fun onGroupMessage(message: GroupMessage) {
            if (message.text.contains("Hi")) {
                message.reply("Hello")
            }
        }
    })
    return@promise workerApplication.handle(request)
}
```

# 运行程序

在IntelliJ IDEA右侧Gradle任务窗口找到`wrangler`组, 首先运行`prepareWranglerRun`，再运行`wranglerDev`,
***不要***停止或重新运行`wranglerDev`任务, 这是一个后台任务wrangler会自动热重载代码, 需要重新运行程序时你需要
运行`prepareWranglerRun`任务

启动一个OneBot11实现并支持反向Websocket, 将地址填写为wrangler的地址并配置accessToken,

# 部署程序

你需要先手动执行`wrangler login`命令来登录到cloudflare， 之后运行`prepareProductionDeploy`等待执行完毕后运行
`wranglerDeploy`任务

# 注意事项

需要注意的是Cloudflare worker并不是一个标准的nodejs环境也不是一个浏览器环境而是V8运行时,
并且一些常规的API使用方法均有不同, rob-worker-js依赖于 `kotlin-cloudflare-worker`，
这是一个由我开发的纯Kotlin实现的cloudflare worker兼容层库，内置了一些常用的函数，例如： `http客户端` `websocket服务器`,
你可以前往[kotlin-cloudflare-worker](https://github.com/RTAkland/kotlin-cloudflare-worker/blob/main/README-zh.md#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
来查看具体用法和具体注意事项

Worker限制了CPU时间如果需要执行CPU密集型任务请考虑优化你的代码逻辑

## 创建协程作用域

请使用`GlobalScope.promose {}`或`MainScope().launch {}`来创建一个协程作用域,
***不要使用***`CoroutineScope(Dispatcher.Default).launch {}`创建协程作用域, 因为使用此方法创建的所有协程
都会被drop不会被执行
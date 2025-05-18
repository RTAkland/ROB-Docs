# Hi

这里是 `Milky` 协议的SDK， 现在正在开发中但是基本可用

Milky模块的用法和OneBot11模块的用法基本一致, 可以直接参考OneBot11模块的文档来开发

# 特性

1. 单个Bot实例生命周期内只会开启一个额外的线程(作为websocket通信线程), 性能有所提升
2. 使用ADT（代数数据类型）来弥补OneBot11模块直接使用原始数据类型而导致请求失败会直接抛出异常的问题
3. Asynccccccccccccccccccccccccccccccccccccccccccccccc
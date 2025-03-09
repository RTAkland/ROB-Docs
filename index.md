---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ROneBot 开发文档!"
  tagline: Powered By RTAkland
  actions:
    - theme: brand
      text: OneBot11
      link: docs/onebot11/Home
    - theme: brand
      text: QQ官方机器人
      link: docs/qqbot-webhook/index
    - theme: alt
      text: Kook-Websocket
      link: docs/kook-websocket/index
    - theme: alt
      text: Kook-Webhook
      link: docs/kook-webhook/index

features:
  - title: 全异步
    details: ROB将所有的消息、事件、指令都作为异步执行不会阻塞其他指令或者事件的进行
  - title: 函数式编程支持
    details: 支持使用函数式的方式创建命令、创建命令会话、监听事件等
  - title: 更具Kotlin风格
    details: 框架转为Kotlin设计, 添加了DSL的语法更贴近于Kotlin使用者的习惯
---


所有的模块都会遵循以下注意事项

[1.] 全异步指的是OneBot实现下发消息会开启一个协程处理, 在这个消息生命周期内的所有事件在同一个线程上,
例如本次下发的消息的事件和指令在同一个线程, OneBot实现再次下发消息在另外一个线程上  
[2.] 由于深度依赖于Kotlin协程及Kotlin特有的特性所以本框架只能在Kotlin中使用  
[3.] 没了.

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/79452994',
    name: 'RTAkland',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/RTAkland' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60739208',
    name: 'xiaoman1221',
    title: '精神支持',
    links: [
      { icon: 'github', link: 'https://github.com/xiaoman1221' },
    ]
  }
]
</script>

## 开发者们

<VPTeamMembers size="small" :members="members"></VPTeamMembers>
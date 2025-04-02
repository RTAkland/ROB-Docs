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
    - theme: alt
      text: QQ官方机器人
      link: docs/qqbot-webhook/index

features:
  - title: 轻量级
    details: 最终编译出的jar为6mb左右，在Native平台经过Release发布的kexe大小只有5mb
  - title: 模块化
    details: 所有核心功能之外的功能都被抽离成了单独的模块，需要手动引入依赖，这样保证了轻量化设计
  - title: 多平台！
    details: 除了支持Jvm平台之外还支持macX64(armX64)、linuxX64(armX64)、mingwX64, 在Native平台上所有的功能都是完整的, 仅仅少了一个无法在native平台上连接TLS的OneBot实现
---

---

注意: ROB还正在开发中, API可能会有较大的变动
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
      { icon: 'wordpress', link: 'https://blog.rtast.cn' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60739208',
    name: 'xiaoman1221',
    title: '精神支持 | 人生导师',
    links: [
      { icon: 'github', link: 'https://github.com/xiaoman1221' },
      { icon: 'wordpress', link: 'https://www.manjiuqi.com/' }
    ]
  }
]
</script>

## 开发者们

<VPTeamMembers size="small" :members="members"></VPTeamMembers>
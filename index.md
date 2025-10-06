---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ROneBot 开发文档"
  tagline: Powered By RTAkland
  actions:
    - theme: brand
      text: OneBot11
      link: docs/onebot11/Home
    - theme: brand
      text: Milky
      link: docs/milky/Home
    - theme: alt
      text: 杂项(一些有帮助的库)
      link: docs/misc/misc

features:
  - title: 轻量级
    details: 一个空白的机器人APP大小在5mb~6mb左右(Linux除外, 在linux平台下编译出的kexe大小为15mb左右)
  - title: 多平台！
    details: 除了支持Jvm平台之外还支持MacOSArm64、linuxX64(armX64)、mingwX64(Windows) (因Kotlin在2.2.20版本弃用了对Apple X64平台的支持故不支持MacOSX64平台的测试和运行)
  - title: Java友好
    details: 框架支持使用Java进行调用, 但是还是会有一些差异, 具体的差异请到不同的平台的文档中查看
---

---

注意: ROB还正在开发中, API可能会有较大的变动
---

所有的模块都会遵循以下注意事项

[1.] 全异步指的是OneBot实现下发消息会开启一个协程处理, 在这个消息生命周期内的所有事件在同一个线程上,
例如本次下发的消息的事件和指令在同一个线程, OneBot实现再次下发消息在另外一个线程(Milky模块除外)  
[2.] 没了.

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
    title: '人生导师',
    links: [
      { icon: 'github', link: 'https://github.com/xiaoman1221' },
      { icon: 'wordpress', link: 'https://www.manjiuqi.com/' }
    ]
  }
]
</script>

## 主要开发者们

<VPTeamMembers size="small" :members="members"></VPTeamMembers>

## 贡献者们

> 排名不分前后, 非实时更新

<table style="border-collapse: collapse; border: none;">
  <tr>
    <td align="center">
      <a href="https://github.com/kukume">
        <img src="https://avatars.githubusercontent.com/u/45278810?v=4" width="80" style="border-radius:50%"><br/>
        <sub><b>kukume</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/NekoCurit">
        <img src="https://avatars.githubusercontent.com/u/108512490?v=4" width="80" style="border-radius:50%"><br/>
        <sub><b>NekoCurit</b></sub>
      </a>
    </td>
  </tr>
</table>
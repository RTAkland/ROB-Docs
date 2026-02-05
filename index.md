---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ROneBot 使用文档"
  tagline: Powered By RTAkland
  actions:
    - theme: brand
      text: OneBot11
      link: docs/onebot11/Home
    - theme: brand
      text: Milky
      link: docs/milky/Home
    - theme: alt
      text: 杂项
      link: docs/misc/misc

features:
  - title: 轻量级
    details: 一个空白的机器人APP大小在5mb~6mb左右(Linux除外, 在linux平台下编译出的kexe大小为15mb左右)
  - title: 多平台！
    details: 除了支持Jvm平台之外还支持MacOSArm64、linuxX64(armX64)、mingwX64(Windows)、MacOSX64, 甚至是Cloudflare Worker
  - title: Java不友好
    details: 4.0版本前的rob支持java使用, 在此之后的版本不支持Java使用
---

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
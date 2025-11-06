import {defineConfig} from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    lastUpdated: true,
    title: "ROneBot 开发文档!",
    themeConfig: {
        siteTitle: "ROB开发文档",
        footer: {
            message: "以Apache-2.0开源协议开源",
            copyright: "Copyright © 2024-present"
        },
        search: {
            provider: "local"
        },
        logo: {
            light: "https://static.rtast.cn/static/rob-logo-light.svg",
            dark: "https://static.rtast.cn/static/logo-icon.svg"
        },
        nav: [
            {
                text: "RTAkland",
                link: "https://github.com/RTAkland"
            }
        ],
        socialLinks: [
            {icon: "github", link: "https://github.com/RTAkland/ROneBot"}
        ],
        sidebar: [
            {
                text: "Milky",
                items: [
                    {text: "Milky首页", link: "/docs/milky/Home"},
                    {text: "创建Bot实例", link: "/docs/milky/创建Bot实例"},
                    {text: "监听事件", link: "/docs/milky/监听事件"},
                    {text: "调用API", link: "/docs/milky/调用API"},
                    {text: "处理/构造/发送消息", link: "/docs/milky/处理消息构造消息和发送消息"},
                    {text: "创建命令", link: "/docs/milky/创建命令"},
                    {text: "后台任务调度器", link: "/docs/milky/任务调度器"},
                    {text: "事件注册表", link: "/docs/milky/事件注册表"},
                ]
            },
            {
                text: "OneBot11",
                items: [
                    {text: "快速开始", link: "/docs/onebot11/Home"},
                    {text: "基本概念", link: "/docs/onebot11/基本概念"},
                    {text: "创建Bot实例", link: "/docs/onebot11/创建Bot实例"},
                    {text: "管理Bot实例", link: "/docs/onebot11/管理Bot实例"},
                    {text: "监听事件", link: "/docs/onebot11/监听事件"},
                    {text: "处理消息", link: "/docs/onebot11/处理消息"},
                    {text: "构造消息", link: "/docs/onebot11/构造消息"},
                    {text: "发送消息和操作API", link: "/docs/onebot11/发送消息和操作API"},
                    {text: "创建命令和创建会话", link: "/docs/onebot11/创建命令和创建会话"},
                    {text: "任务调度器", link: "/docs/onebot11/任务调度器Scheduler"},
                    {text: "StreamAPI", link: "/docs/onebot11/StreamAPI"},
                    {text: "Java用户", link: "/docs/onebot11/DifferenceBetweenKotlin"},
                    {text: "消息的生命周期", link: "/docs/onebot11/消息的生命周期"},
                    {text: "Hooking钩子", link: "/docs/onebot11/Hooking"}
                ]
            }
        ]
    }
})

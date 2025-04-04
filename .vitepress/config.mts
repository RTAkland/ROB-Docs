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
                    {text: "权限控制", link: "/docs/onebot11/权限控制"},
                    {text: "任务调度器", link: "/docs/onebot11/任务调度器Scheduler"},
                    {text: "命令拦截器", link: "/docs/onebot11/命令拦截器"}
                ]
            },
            {
                text: "权限控制",
                link: "/docs/permission/permission"
            },
            {
                text: "QQ官方SDK",
                link: "/docs/qqbot-webhook/index"
            }
        ]
    }
})

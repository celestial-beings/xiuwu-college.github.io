import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import SidebarConfig from './sidebar.config'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/xiuwuge.github.io/',
  lang: 'zh-CN',
  title: '修吾阁',
  description: '修吾身心，自吾可视。',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/images/logo.jpeg',
    contributors: true,
    contributorsText: '修吾者',
    lastUpdated: true,
    lastUpdatedText: '编辑于',
    navbar: [
      {
        text: '前端规范',
        link: '/WebStandard/'
      },
      {
        text: '深夜食堂',
        link: '/WebMidnightDiner/'
      }
    ],
    sidebar: SidebarConfig
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './hooks/clientAppEnhanceHook.ts')
})

import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import SidebarConfig from './sidebar.config'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/xiuwuge.github.io/',
  lang: 'zh-CN',
  title: '修吾书院',
  head: [['link', { rel: 'icon', href: './images/logo.png' }]],
  description: '吾当三日， 自省吾身。修吾身心，自吾可视。',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/images/logo.png',
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
        text: '前端杂货铺',
        link: '/WebGroceryStore/'
      }
    ],
    sidebar: SidebarConfig
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './hooks/clientAppEnhanceHook.ts')
})

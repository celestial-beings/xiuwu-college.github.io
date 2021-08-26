import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import SidebarConfig from './sidebar.config'
import { path } from '@vuepress/utils'

const base = '/xiuwu-college.github.io/'

export default defineUserConfig<DefaultThemeOptions>({
  base,
  lang: 'zh-CN',
  title: '修吾书院',
  head: [['link', { rel: 'icon', href: `${base}/images/logo.png` }]],
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
        text: '墨攻(MogoUI)',
        link: '/WebGroceryStore/'
      },
      {
        text: '前端规范',
        link: '/WebStandard/'
      },
      {
        text: '全栈之路',
        children: [
          { text: 'Node学习手册', link: '/WebFullStack/Node/' },
          { text: 'MongoDB学习手册', link: '/WebFullStack/MongoDB/' }
        ]
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

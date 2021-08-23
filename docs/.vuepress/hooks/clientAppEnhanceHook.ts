import { defineClientAppEnhance } from '@vuepress/client'
import registerGlobalComponents from './modules/registerGlobalComponents'

export default defineClientAppEnhance(({ app }) => {
  // 全局注册组建
  registerGlobalComponents(app)
})

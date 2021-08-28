const files = require.context('./', true, /\.vue$/)
const components = []
files.keys().forEach(el => {
  const component = files(el).default
  const componentName = el.match(/\w+.vue$/)[0].split('.')[0]
  if (!component.name) {
    component.name = componentName
  }
  components.push(component)
})

export default components

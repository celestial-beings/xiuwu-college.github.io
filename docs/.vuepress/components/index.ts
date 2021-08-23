const files = require.context('./', true, /\.vue$/)
const components = []
files.keys().forEach(el => {
  components.push(files(el).default)
})

export default components

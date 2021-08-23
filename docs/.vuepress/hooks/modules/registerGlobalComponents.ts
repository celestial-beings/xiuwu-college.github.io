const components = []

try {
  const files = require.context('../../components', true, /\.vue$/)
  files.keys().forEach(el => {
    components.push(files(el).default)
  })
} catch (error) {
  throw(error)
}


export default (app): void => {
  components.forEach(el => {
    app.component(el.name, el)
  })
}

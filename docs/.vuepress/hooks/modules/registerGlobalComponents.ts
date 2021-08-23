const files = require.context('../../components', true, /\.vue$/)
const components = []
files.keys().forEach(el => {
  components.push(files(el).default)
})

export default (app): void => {
  components.forEach(el => {
    app.component(el.name, el)
  })
}

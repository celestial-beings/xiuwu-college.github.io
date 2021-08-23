import localComponents from '../../components/index'

const components = [
  ...localComponents
]

export default (app): void => {
  components.forEach(el => {
    app.component(el.name, el)
  })
}

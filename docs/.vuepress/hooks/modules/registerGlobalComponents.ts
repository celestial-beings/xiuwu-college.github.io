import localComponents from '../../components/index'

const components = [
  ...localComponents
]

export default (app): void => {
  components.forEach(el => {
    console.log(el.name)
    app.component(el.name, el)
  })
}

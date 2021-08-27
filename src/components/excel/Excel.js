// 117
import {$} from '@core/dom'; // auto import

export class Excel {
// 119
  constructor(selector, options) {
    this.$el = $(selector) // 144
    this.components = options.components || []
  }
  
  // 125
  getRoot() {
    // 139
    const $root = $.create('div', 'excel')
    // const $root = document.createElement('div')
    // 133
    // $root.classList.add('excel')
    // $root.textContent = 'test'
    // $root.style.fontSize = '5rem'
    // console.log(this.components)
    this.components = this.components.map(Component => { // 150
      // 133-1
      // const $el = document.createElement('div')
      // $el.classList.add(Component.className)
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // 159 DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
      // 141
      // debugger
      $el.html(component.toHTML())
      // debugger
      // $el.innerHTML = component.toHTML()
      // console.log(component.toHTML())
      // $root.insertAdjacentHTML('beforeend', component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }
  
  render() {
    // console.log(this.$el)
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
    // const node = document.createElement('h1')
    // node.textContent = 'TEST'
    // this.$el.append(document.createElement('h1'))
    this.$el.append(this.getRoot())
    // 150-1
    // console.log(this.components)
    this.components.forEach(component => component.init())
  }
}

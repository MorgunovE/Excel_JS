import {capitalize} from '@core/utils'; // auto import
// 115

export class DomListener {
// 132 and 148
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.$root = $root
    // 148-1
    this.listeners = listeners
  }
  
  // 145
  initDomListeners() {
    // console.log(this.listeners, this.$root) // 151
    // 151-1
    this.listeners.forEach(listener => {
      // console.log(listener, this.$root)
      const method = getMethodName(listener)
      // console.log(this)
      // console.log(method)
      // same that addEventListener
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(`
          Method ${method} is not implemented in ${name} Component
        `)
      }
      // 160
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }
  
  removeDomListeners() {
    // 157
    // console.log('removeDomListeners')
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      // console.log('removeDomListeners', method)
      this.$root.off(listener, this[method])
    })
  }
}

// 151-2
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

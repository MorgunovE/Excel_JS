// 116
import {DomListener} from '@core/DomListener'; // auto import

export class ExcelComponent extends DomListener {
  // 147
  constructor($root, options = {}) {
    super($root, options.listeners) // 149
    this.name = options.name || '' // 154
    // console.log(options)
    // 233
    this.emitter = options.emitter
    // 238-2
    this.unsubscribers = []
    // 209
    this.prepare()
  }
  
  // 209-1 - Setup component before init
  prepare() {
  }
  
  // return template component
  toHTML() {
    return ''
  }
  
  // 149-1 - Initial component and add DOM listeners
  init() {
    this.initDomListeners()
  }
  
  // 158 - remove component and clear listeners
  destroy() {
    this.removeDomListeners()
    // 238-4
    this.unsubscribers.forEach(unsub => unsub())
  }
  // 238 give information listeners on event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // 238-1 - subscribe to event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    // 238-3
    this.unsubscribers.push(unsub)
  }
}

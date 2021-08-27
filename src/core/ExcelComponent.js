// 116
import {DomListener} from '@core/DomListener'; // auto import

export class ExcelComponent extends DomListener {
  // 147
  constructor($root, options = {}) {
    super($root, options.listeners) // 149
    this.name = options.name || '' // 154
  }
  
  // return template component
  toHTML() {
    return ''
  }
  
  // 149-1
  init() {
    this.initDomListeners()
  }
  
  // 158
  destroy() {
    this.removeDomListeners()
  }
}

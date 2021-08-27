// 121
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
// import {$} from '@core/dom';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
// 128
  static className = 'excel__table'
  
  // 170
  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }
  
  toHTML() {
    // 137 and 163
    return createTable(20)
  }
  
  // 170-1
  // onClick() {
  //   console.log('click')
  // }
  //
  onMousedown(event) {
    // 174
    //   console.log('mousedown', event.target.getAttribute('data-resize'))
    //   console.log(event.target.dataset)
    if (shouldResize(event)) { // 192
      // 190
      resizeHandler(this.$root, event)
    }
  }
  
  //
  // onMousemove() {
  //   console.log('Mousemove')
  // }
  //
  // onMouseup() {
  //   console.log('mouseup')
  // }
}

// 123 ms  Scripting
// 995 ms  Rendering
// 54 ms  Scripting
// 366 ms  Rendering
// 62 ms  Scripting
// 483 ms  Rendering

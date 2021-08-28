// 121
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';
import {resizeHandler} from '@/components/table/table.resize';
import {isCell, matrix, nextSelector, shouldResize} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';

export class Table extends ExcelComponent {
// 128
  static className = 'excel__table'
  
  // 170 and 230
  constructor($root, options) {
    super($root, {
      name: 'Table',
      // 221 and 248
      listeners: ['mousedown', 'keydown', 'input'],
      // 230-1
      ...options
    })
    // 237-1
    // this.unsubs = []
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
    } else if (isCell(event)) { // 210-1
      // 210-2
      // console.log(event)
      const $target = $(event.target)
      // 214
      if (event.shiftKey) {
        // group
        // console.log('Target cell: ', $target.id(true))
        // console.log('Current cell: ', this.selection.current.id(true))
        
        // 217
        // const target = $target.id(true)
        // const current = this.selection.current.id(true)
        // 220
        const $cells = matrix($target, this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
        // const cols = range(current.col, target.col)
        // const rows = range(current.row, target.row)
        // // console.log('Cols: ', cols)
        // // console.log('Rows: ', rows)
        // const ids = cols.reduce((acc, col) => {
        //   rows.forEach(row => acc.push(`${row}:${col}`))
        //   return acc
        // }, [])
        // console.log(ids)
        // const $cells = ids.map(id => this.$root.find(`[data-id="${id}"]`))
        // this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }
  // 221-1
  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp'
    ]
    const {key} = event
    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      // console.log(key)
      const id = this.selection.current.id(true)
      const $next = this.$root.find(nextSelector(key, id))
      // this.selection.select($next)
      // 246
      // this.$emit('table:select', $next)
      // 251-2
      this.selectCell($next)
    }
    // console.log(event.key)
  }
  //
  // onMousemove() {
  //   console.log('Mousemove')
  // }
  //
  // onMouseup() {
  //   console.log('mouseup')
  // }
  // 200
  init() {
    super.init()
    // 206
    // const $cell = this.$root.find('[data-id="0:0"]')
    // this.selection.select($cell)
    // 250
    // this.$emit('table:select', $cell)
    // 251-1
    this.selectCell(this.$root.find('[data-id="0:0"]'))
    
    // console.log('init')
    // 235 and 237
    // const unsub = this.emitter.subscribe('it is working', text => {
    //   this.selection.current.text(text)
    this.$on('formula:input', text => { // 240
      this.selection.current.text(text)
      // console.log('Table from Formula text', text)
    })
    // this.unsubs.push(unsub)
    // 243
    this.$on('formula:done', () => {
      this.selection.current.focus()
    })
  }
  
  // 210
  prepare() {
    // 202
    this.selection = new TableSelection()
    // console.log('prepare')
  }
  // 237-2
  // destroy() {
  //   super.destroy()
  //   this.unsubs.forEach(unsub => unsub())
  // }
  
  // 248-1
  onInput(event) {
    this.$emit('table:input', $(event.target))
  }
  
  // 251
  selectCell($cell) {
    this.selection.select($cell)
    this.$emit('table:select', $cell)
  }
}

// 217-1 and 219
// function range(start, end) {
//   if (start > end) {
//     [end, start] = [start, end]
//   }
//   return new Array(end - start + 1)
//       .fill('')
//       .map((_, index) => start + index)
// }

// 221-2 and 224
// function nextSelector(key, {col, row}) {
//   const MIN_VALUE = 0
//   switch (key) {
//     case 'Enter':
//     case 'ArrowDown':
//       row++
//       break
//     case 'Tab':
//     case 'ArrowRight':
//       col++
//       break
//     case 'ArrowLeft':
//       col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
//       break
//     case 'ArrowUp':
//       row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
//       break
//   }
//   return `[data-id="${row}:${col}"]`
// }
// 123 ms  Scripting
// 995 ms  Rendering
// 54 ms  Scripting
// 366 ms  Rendering
// 62 ms  Scripting
// 483 ms  Rendering

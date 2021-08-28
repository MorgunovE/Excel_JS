// 122
import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';

export class Formula extends ExcelComponent {
// 126
  static className = 'excel__formula'
  
  // 146 and 228
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'], // 242
      ...options // 228-1
    })
  }
  
  toHTML() {
    // 136 and 247-1
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>
    `
  }
  
  // 146-1
  onInput(event) {
    // 153
    // console.log(this.$root)
    // console.log('Formula: onInput ', event.target.textContent.trim())
    // 234
    // const text = $(event.target) // 245
    // this.emitter.emit('it is working', text)
    this.$emit('formula:input', $(event.target).text()) // 239 and 245
  }
  
  // 155
  // onClick(event) {
  //   console.log(event)
  // }
  
  // 242-1
  onKeydown(event) {
    // 249-1
    const keys = ['Enter', 'Tab']
    if (keys.includes(event.key)) {
      event.preventDefault()
      this.$emit('formula:done')
    }
  }
  // 247
  init() {
    super.init()
    this.$formula = this.$root.find('#formula')
    this.$on('table:select', $cell => {
      this.$formula.text($cell.text())
    })
    // 249
    this.$on('table:input', $cell => {
      this.$formula.text($cell.text())
    })
  }
}

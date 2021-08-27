// 122
import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
// 126
  static className = 'excel__formula'
  
  // 146
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }
  
  toHTML() {
    // 136
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
  
  // 146-1
  onInput(event) {
    // 153
    console.log(this.$root)
    console.log('Formula: onInput ', event.target.textContent.trim())
  }
  
  // 155
  onClick(event) {
    console.log(event)
  }
}

// 123
import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
// 129
  static className = 'excel__toolbar'
  
  // 161 and 231
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      // 231-1
      ...options
    })
  }
  
  toHTML() {
    // 135
    return `
      <div class="button">
          <span class="material-icons">
            format_align_left
          </span>
      </div>
      <div class="button">
          <span class="material-icons">
            format_align_center
          </span>
      </div>
      <div class="button">
          <span class="material-icons">
            format_align_right
          </span>
      </div>
      <div class="button">
          <span class="material-icons">
            format_bold
          </span>
      </div>
      <div class="button">
          <span class="material-icons">
            format_italic
          </span>
      </div>
      <div class="button">
          <span class="material-icons">
            format_underlined
          </span>
      </div>
    `
  }
  
  // 161-1
  onClick(event) {
    console.log(event.target)
  }
}

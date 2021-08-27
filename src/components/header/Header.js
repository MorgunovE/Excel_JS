// 120
import {ExcelComponent} from '@core/ExcelComponent' // auto import

export class Header extends ExcelComponent {
// 127
  static className = 'excel__header'
  toHTML() {
    // 134
    return `
    <input class="input" type="text" value="New table"/>
      <div>
        <div class="button">
          <span class="material-icons">
            delete
          </span>
        </div>
        <div class="button">
          <span class="material-icons">
            exit_to_app
          </span>
        </div>
      </div>
    `
  }
}

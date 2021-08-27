// 121
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
// 128
  static className = 'excel__table'
  toHTML() {
    // 137 and 163
    return createTable(20)
  }
}

// 201
export class TableSelection {
  // 213-2
  static className = 'selected'
  constructor() {
    // 203
    this.group = []
    // 215
    this.current = null
  }
  
  select($el) {
    // 213-1
    this.clear()
    // 208
    $el.focus().addClass(TableSelection.className) // 223
    this.group.push($el)
    // 215-1
    this.current = $el
  }
  
  // 213
  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.className))
    this.group = []
  }
  
  selectGroup($group = []) {
  // 218
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }
}

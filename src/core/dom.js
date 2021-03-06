// 138
class Dom {
  constructor(selector) {
    // #app
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }
  
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }
  
  clear() {
    this.html('')
    return this
  }
  
  // 143-1
  append(node) {
    // console.log(node.$el)
    // this.$el.append(node.$el)
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
  
  // 143-2
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }
  
  // 156
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }
  
  // 177
  closest(selector) {
    return $(this.$el.closest(selector))
  }
  
  // 177-1
  getCoords() {
    return this.$el.getBoundingClientRect()
  }
  
  // 180
  get data() {
    return this.$el.dataset
  }
  
  // 182
  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }
  
  // 186
  css(styles = {}) {
    // for (const key in styles) {
    //   console.log(key)
    //   console.log(styles[key])
    // }
    // this.$el
    Object
        .keys(styles)
        .forEach(key => {
          this.$el.style[key] = styles[key]
          // console.log(key)
          // console.log(styles[key])
        })
  }
  
  // 205
  find(selector) {
    return $(this.$el.querySelector(selector))
  }
  
  // 207
  addClass(className) {
    this.$el.classList.add(className)
    return this
  }
  
  // 207-1
  removeClass(className) {
    this.$el.classList.remove(className)
    return this
  }
  
  // 216
  id(parse) {
    if (parse) {
      const parsed = this.id().split(':')
      return {
        row: +parsed[0],
        col: +parsed[1]
      }
    }
    return this.data.id
  }
  // 222
  focus() {
    this.$el.focus()
    return this
  }
  // 236
  text(text) {
    // 244
    if (typeof text === 'string') {
      this.$el.textContent = text
      return this
    }
    if (this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value.trim()
    }
    return this.$el.textContent.trim()
    // this.$el.textContent = text
  }
}

// event target
export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  // 143
  return $(el)
}

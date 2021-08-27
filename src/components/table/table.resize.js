// 189
import {$} from '@core/dom';

export function resizeHandler($root, event) { // 189-1
  // console.log('Start resizing', event.target.dataset.resize)
  // 178
  const $resizer = $(event.target)
  // const $parent = $resizer.$el.parentNode // bad!
  // const $parent = $resizer.$el.closest('.column') // not bad!
  const $parent = $resizer.closest('[data-type="resizable"]')
  // debugger
  // console.log($parent.getCoords())
  const coords = $parent.getCoords()
  // 185
  const type = $resizer.data.resize
  // 188-2
  let value
  // 188-3
  const sideProp = type === 'col' ? 'bottom' : 'right'
  // console.log(type)
  // 188-1
  $resizer.css({
    opacity: 1,
    [sideProp]: '-5000px'
  })
  // 181
  // console.log($parent.data.col)
  // 183-1
  // const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)
  document.onmousemove = e => {
    // 185-1
    if (type === 'col') {
      // console.log('mousemove')
      // console.log(e.pageX)
      const delta = e.pageX - coords.right
      // console.log(delta)
      value = coords.width + delta
      // 187
      // $parent.$el.style.width = value + 'px'
      // 188
      $resizer.css({
        right: -delta + 'px'
      })
      // 181-1 and 183
      // cells.forEach(el => el.style.width = value + 'px')
    } else {
      // 185-2
      const delta = e.pageY - coords.bottom
      // console.log(delta)
      value = coords.height + delta
      // 188-3
      $resizer.css({
        bottom: -delta + 'px'
      })
      // 187-1
      // $parent.$el.style.height = value + 'px'
      // $parent.css({
      //   height: value + 'px'
      // })
    }
  }
  // 178-1
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    
    if (type === 'col') {
      $parent.css({
        width: value + 'px'
      })
      $root
          .findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = value + 'px')
    } else {
      $parent.css({
        height: value + 'px'
      })
    }
    
    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0
    })
  }
}

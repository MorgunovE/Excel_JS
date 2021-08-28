// 226

export class Emitter {
  constructor() {
    this.listeners = {}
  }
  
  // 226-1 or dispatch, fire, trigger - give information listeners
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }
  
  // 226-2 or on, listen - subscribe on info or add new listener
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = this.listeners[event]
          .filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()
// const unsub = emitter.subscribe('Evgen', data => console.log('Sub: ', data))
// emitter.emit('Evgen', 42)
// setTimeout(() => {
//   emitter.emit('Evgen', 'After 2 sec')
// }, 2000)
// setTimeout(() => {
//   unsub()
// }, 3000)
// setTimeout(() => {
//   emitter.emit('Evgen', 'After 4 sec')
// }, 4000)

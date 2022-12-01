export function ContadorEvents(root: ShadowRoot) {
  const initValue = root.getElementById('counterBox')?.getAttribute('initvalue')!
  let counter = parseInt(initValue) || 0
  const incrementar = () => {
    counter++
    emitEvent()
  }
  const decrementar = () => {
    counter--
    emitEvent()
  }

  const emitEvent = () => {
    root.dispatchEvent(new CustomEvent('updated', { bubbles: true, composed: true, detail: counter }))
  }

  const btnSumar = root.getElementById('btnSumar')
  const btnRestar = root.getElementById('btnRestar')

  btnSumar?.addEventListener('click', incrementar)
  btnRestar?.addEventListener('click', decrementar)
}

// export class ContadorLogic extends EventTarget {
//   private _counter: number
//   constructor(initValue = 0) {
//     super()
//     this._counter = initValue
//   }
// }

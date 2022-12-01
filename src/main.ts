export {}
const myContador = document.querySelector('my-contador')
const myOutput = document.querySelector('my-output')

myContador?.addEventListener('updated', (e: CustomEventInit) => {
  myOutput?.setAttribute('value', e.detail)
  console.log(myOutput)
})

import { ContadorEvents } from './Contador-Logic'

export class Contador extends HTMLElement {
  [key: string]: any
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['initvalue']
  }

  getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = `
    <section id="counterBox" initValue=${this.initvalue}>
    <button id="btnSumar">Sumar</button>
    <button id="btnRestar">Restar</button>
  </section>
    `

    return template
  }

  getStyles() {
    return ``
  }

  attributeChangedCallback(attr: string, oldValue: string, newValue: string) {
    const equals = oldValue === newValue
    if (!equals) {
      this[attr] = newValue
    }
  }

  render() {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
    ContadorEvents(this.shadowRoot!)
  }

  disconnectedCallback() {}
}

customElements.define('my-contador', Contador)

export class Output extends HTMLElement {
  [key: string]: any
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['value']
  }

  getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = `<h2>Contador actual: <span id="output">${this.value}</span></h2>`

    return template
  }

  getStyles() {
    return ``
  }

  attributeChangedCallback(attr: string, oldValue: string, newValue: string) {
    const equals = oldValue === newValue
    if (!equals) {
      this[attr] = newValue

      if (attr === 'value') {
        const span = this.shadowRoot?.getElementById('output')
        if (span) span.textContent = newValue
      }
    }
  }

  render() {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {}
}

customElements.define('my-output', Output)

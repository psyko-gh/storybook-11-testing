import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('w-name')
export class WName extends LitElement {
  /**
   * A simple string property with different prop and attr name
   * @type {string}
   */
  @property({ type: String, attribute: 'public-name' })
  accessor name = 'World';

  /**
   * Description of the defaultValue property (`value` attribute)
   */
  @property({type: String, attribute: 'value'})
  accessor defaultValue;

  /**
   * The property description shadows the attribute being tied to `defaultValue`
   */
  @property({type: String, attribute: false})
  accessor value;

  render() {
    return html`
      <p>Testing names</p>
      <p><b>defaultValue :</b> ${this.defaultValue}</p>
      <p><b>value :</b> ${this.value}</p>
    `;
  }
}

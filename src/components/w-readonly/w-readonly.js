import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('w-readonly')
export class WReadonly extends LitElement {
  /**
   * ❌ Readonly - Should not have control in UI
   * @readonly
   */
  static formAssociated = true;

  /**
   * ✔️ A standard property - Does have a control in UI
   * @type {string}
   */
  @property({ type: String})
  accessor publicName = 'World';

  /**
   * ✔️ A readonly property - Does not have control in UI
   * @return {number}
   * @readonly
   */
  get random() {
    return Math.random()
  }

  render() {
    return html`
      <p>Testing privacy</p>
    `;
  }
}

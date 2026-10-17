import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * This component has :
 * - 1 public property with matching attribute
 * - 1 readonly property
 *
 * ✔️ Both properties are visible in the generated documentation
 *
 * ✔️ Only the editable property has control
 */
@customElement('w-readonly')
export class WReadonly extends LitElement {
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

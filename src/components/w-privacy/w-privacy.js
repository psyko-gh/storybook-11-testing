import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * This component has :
 * - 1 public property with matching attribute
 * - 1 protected field
 * - 1 private field
 * - 1 private static field
 *
 * ✔️ Only the public property is visible
 *
 * ✔️ Protected and private are not visible
 *
 * ✔️ Statics are not visible
 */
@customElement('w-privacy')
export class WPrivacy extends LitElement {
  /**
   * ✔️ Static - does not appear in generated documentation
   */
  static formAssociated = true;

  /**
   * ✔️ A public property - Visible in generated documentation
   * @type {string}
   */
  @property({ type: String})
  accessor publicName = 'Public name value';

  /**
   * ✔️ A protected property - does not appear in generated documentation
   * @type {string}
   * @protected
   */
  accessor _protectedName = 'World';

  /**
   * ✔️ A private property - should not appear in generated documentation
   * @type {string}
   * @private
   */
  accessor __privateName = 'World';

  render() {
    return html`
      <p>Testing privacy</p>
      <pre>${this.publicName}</pre>
    `;
  }
}

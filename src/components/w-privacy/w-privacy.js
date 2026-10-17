import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('w-privacy')
export class WPrivacy extends LitElement {
  /**
   * ❌ Should not appear in description
   * @private
   * @readonly
   */
  static formAssociated = true;

  /**
   * ✔️ A public property - Visible in description
   * @type {string}
   */
  @property({ type: String})
  accessor publicName = 'World';

  /**
   * ❌ A protected property - should not appear in description ?
   * @type {string}
   * @protected
   */
  accessor _protectedName = 'World';

  /**
   * ❌ A private property - should not appear in description
   * @type {string}
   * @private
   */
  accessor __privateName = 'World';

  render() {
    return html`
      <p>Testing privacy</p>
    `;
  }
}

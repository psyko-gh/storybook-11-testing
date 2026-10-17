import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('w-test-01')
export class WTest01 extends LitElement {
  /** @ignore */
  static formAssociated = true;

  /**
   * `Set boolean` control should not be present here ?
   * @readonly
   */
  static staticReadonly = true;

  /**
   * A simple string property
   * @type {string}
   */
  @property({ type: String })
  accessor name = 'World';

  /**
   * A simple number property
   * @type {number}
   */
  @property({ type: Number })
  accessor number = 12;

  /**
   * An internal field. Flagged as private. Should not appear here ?
   * @type {number}
   * @private
   */
  __privateField = 0;

  /**
   * Flagged as private. Should not appear ??
   * @type {number}
   * @private
   */
  @state()
  accessor internalState = 0;

  /**
   * Flagged as protected. Should not appear ??
   * @type {number}
   * @protected
   */
  @state()
  accessor _protectedInternalState = 0;

  /**
   * Returns some readonly value. Seems to be working fine as control is disabled.
   * @return {string}
   * @readonly
   */
  get readonlyValue() {
    return 'test';
  }

  /**
   * A simple enumeration property. Control object seems invalid ?
   * @type {'blue' | 'red' | 'green'}
   */
  @property({ type: String })
  accessor color;

  /**
   * Description of the defaultValue property (value attribute)
   */
  @property({type: String, attribute: 'value'})
  accessor defaultValue;

  /**
   * The property description shadows the attribute being tied to `defaultValue`
   */
  @property({type: String, attribute: false})
  accessor value;

  render() {
    this.__privateField++;
    this.internalState++;
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}

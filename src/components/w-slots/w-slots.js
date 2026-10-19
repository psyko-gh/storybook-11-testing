import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {when} from 'lit/directives/when.js';

/**
 * This component tests slots, CSS properties and states
 *
 * @cssprop [--my-prop-1=red] - ✔️ some CSS property
 *
 * @cssstate enabled - ❌ State should probably not have a control ?
 *
 * @slot - ✔️ the default slot
 * @slot second - ✔️ another slot
 */
@customElement('w-slots')
export class WSlots extends LitElement {

  /**
   * ✔️ Doesn't collide with slot
   * @type {string}
   */
  @property({ type: String })
  accessor second;

  render() {
    return html`
        <slot>Default slot</slot>
        <br/>
        <div style="outline: 2px solid var(--my-prop-1, red); margin: 0.5rem;">
            <slot name="second">Second slot</slot>
        </div>
    `
  }
}

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {when} from 'lit/directives/when.js';

/**
 * This component goes through various types for properties
 *
 * ✔️ A string property - control is OK
 *
 * ✔️ A number property - control is OK
 *
 * ❌ An array property - control does not allow inputting an array
 *
 * ✔️ A enumeration property - control is OK
 *
 * ✔️ A enumeration property with a lot of values - control is OK
 *
 * ✔️ An object property - control is not available (as expected)
 *
 * ✔️ A date property - control is OK
 */
@customElement('w-types')
export class WTypes extends LitElement {
  /**
   * ✔️ A string property
   * @type {string}
   */
  @property({ type: String})
  accessor stringProp = 'World';

  /**
   * ✔️ A number property
   * @type {number}
   */
  @property({ type: Number})
  accessor numberProp = 12;

  /**
   * ❌ An array property
   * @type {string[]}
   */
  @property({ type: Array})
  accessor arrayProp = [];

  /**
   * ✔️ An enumeration property.
   * @type {'blue' | 'red' | 'green'}
   */
  @property({ type: String })
  accessor color = 'red';

  /**
   * ✔️ An enumeration property with more values.
   * @type {'100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000' | '1100' | '1200' | '1300' | '1400'}
   */
  @property({ type: String })
  accessor variant = '500';

  /**
   * ✔️ An object property
   * @type {object}
   */
  @property({ type: Array})
  accessor objectProp = {};

  /**
   * ✔️ A function property.
   * @type {() => boolean}
   */
  @property({ type: String })
  accessor functionProp = () => true;

  /**
   * ✔️ An Date property.
   * @type {Date}
   */
  @property({ type: Date })
  accessor dateProp = new Date();

  render() {
    return html`
      <p>Testing types</p>
      <table>
          <thead style="text-align: left">
            <tr>
                <th style="width: 15ch">Name</th>
                <th style="width: 15ch">Type</th>
                <th style="width: 15ch">Value</th>
            </tr>
          </thead>          
          <tbody>
            ${this.__printValue('stringProp', 'string')}
            ${this.__printValue('numberProp', 'number')}
            ${this.__printValue('arrayProp')}
            ${this.__printValue('color', 'string')}            
            ${this.__printValue('objectProp', 'object')}
            ${this.__printValue('functionProp', 'function')}
            ${this.__printValue('dateProp', 'object')}
          </tbody>
      </table>
    `;
  }

  /**
   * Should not be visible in description - and is not visible ! All good
   * @private
   */
  __printValue(key, expectedType) {
    return html`
        <tr>
          <td>${key}</td>
          <td>${typeof this[key]}</td>
          <td>${typeof this[key] === 'object' ? JSON.stringify(this[key]) : this[key]}</td>
          ${when(expectedType, 
                  () => html`<td>${typeof this[key] === expectedType ? '✔️' : '❌'}</td>`,
                  () => html`<td> -- </td>`
          )}
        </tr>
    `
  }
}

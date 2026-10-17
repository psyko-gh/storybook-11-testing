import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {when} from 'lit/directives/when.js';

@customElement('w-types')
export class WTypes extends LitElement {
  /**
   * A string property
   * @type {string}
   */
  @property({ type: String})
  accessor stringProp = 'World';

  /**
   * A number property
   * @type {number}
   */
  @property({ type: Number})
  accessor numberProp = 12;

  /**
   * An array property
   * @type {string[]}
   */
  @property({ type: Array})
  accessor arrayProp = [];

  /**
   * An object property
   * @type {object}
   */
  @property({ type: Array})
  accessor objectProp = {};

  /**
   * An enumeration property. Control object seems invalid ?
   * @type {'blue' | 'red' | 'green'}
   */
  @property({ type: String })
  accessor color = 'red';

  /**
   * A function property. Control object should probably not show
   * @type {() => boolean}
   */
  @property({ type: String })
  accessor functionProp = () => true;

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
            ${this.__printValue('color', 'string')}
            ${this.__printValue('arrayProp')}
            ${this.__printValue('objectProp', 'object')}
            ${this.__printValue('functionProp', 'function')}
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

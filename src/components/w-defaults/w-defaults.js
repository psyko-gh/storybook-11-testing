import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {when} from 'lit/directives/when.js';

const functionDefault = () => true;
/**
 * This component goes through various types for properties defaults verification
 *
 * ✔️ Everything looks good
 *
 * ❌ except controls on array properties - control does not allow inputting an array
 *
 */
@customElement('w-defaults')
export class WDefaults extends LitElement {
  /**
   * ✔️ An Object property
   * @type {object}
   */
  @property({ attribute: false })
  accessor objectNoAttribute;

  /**
   * ✔️ An Object property with default
   * @type {object}
   */
  @property({ attribute: false })
  accessor objectNoAttributeWithDefault = { foo: 'bar'};

  /**
   * ✔️ An Object property
   * @type {object}
   */
  @property({ type: Object })
  accessor objectWithAttribute;

  /**
   * ✔️ An Object property with default
   * @type {object}
   */
  @property({ type: Object })
  accessor objectWithAttributeWithDefault = { foo: 'bar'};

  /* Arrays */

  /**
   * ✔️ An Array property
   * @type {string[]}
   */
  @property({ attribute: false })
  accessor arrayNoAttribute;

  /**
   * ✔️ An Array property with default
   * @type {string[]}
   */
  @property({ attribute: false })
  accessor arrayNoAttributeWithDefault = ['a', 'b', 'c'];

  /**
   * ✔️ An Array property
   * @type {string[]}
   */
  @property({ attribute: false })
  accessor arrayWithAttribute;

  /**
   * ✔️ An Array property with default
   * @type {string[]}
   */
  @property({ attribute: false })
  accessor arrayWithAttributeWithDefault = ['a', 'b', 'c'];

  /* Function */
  /**
   * ✔️ A function property
   * @type {() => boolean}
   */
  @property({ type: Object, attribute: false })
  accessor function;

  /**
   * ✔️ A function property with default
   * @type {() => boolean}
   */
  @property({attribute: false })
  accessor functionWithDefault = () => Math.random() < 0.5 ? 0 : 1;

  /**
   * ✔️ A function property with default
   * @type {() => boolean}
   */
  @property({attribute: false })
  accessor functionWithAnotherDefault = () => functionDefault;

  /* Custom types */
  /**
   * ❓ A typed object property - Probably good
   * @type {SomeObjectProp}
   */
  @property({ type: Object, attribute: false })
  accessor objectCustomType;

  /**
   * ❓ A typed object property with default - Probably good
   * @type {SomeObjectProp}
   */
  @property({attribute: false })
  accessor objectCustomTypeWithDefault = { foo: 'bar'};

  /**
   * ✔️ A function property
   * @type {Formatter}
   */
  @property({ type: Object, attribute: false })
  accessor functionCustomType;

  /**
   * ✔️ A function property
   * @type {Formatter}
   */
  @property({attribute: false })
  accessor functionCustomTypeWithDefault = (v) => `-> ${v} <-`;

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
            ${this.__printValue('objectNoAttribute', 'undefined')}
            ${this.__printValue('objectNoAttributeWithDefault', 'object')}
            ${this.__printValue('objectWithAttribute', 'undefined')}
            ${this.__printValue('objectWithAttributeWithDefault', 'object')}
            ${this.__printValue('arrayNoAttribute', 'undefined')}
            ${this.__printValue('arrayNoAttributeWithDefault', null, Array)}
            ${this.__printValue('arrayWithAttribute', 'undefined')}
            ${this.__printValue('arrayWithAttributeWithDefault', null, Array)}
            ${this.__printValue('function', 'undefined')}
            ${this.__printValue('functionWithDefault', 'function')}
            ${this.__printValue('objectCustomType', 'undefined')}
            ${this.__printValue('objectCustomTypeWithDefault', 'object')}
            ${this.__printValue('functionCustomType', 'undefined')}
            ${this.__printValue('functionCustomTypeWithDefault', 'function')}
          </tbody>
      </table>
    `;
  }

  /**
   * Should not be visible in description - and is not visible ! All good
   * @private
   */
  __printValue(key, expectedType, classOf = undefined) {
    const check = !!expectedType || !!classOf;
    const matches = () =>  (!!expectedType && typeof this[key] === expectedType)  || (!!classOf && this[key] instanceof classOf)

    return html`
        <tr>
          <td>${key}</td>
          <td>${typeof this[key]}</td>
          <td>${typeof this[key] === 'object' ? JSON.stringify(this[key]) : this[key]}</td>
          ${when(check, 
                  () => html`<td>${matches() ? '✔️' : '❌'}</td>`,
                  () => html`<td> -- </td>`
          )}
        </tr>
    `
  }
}

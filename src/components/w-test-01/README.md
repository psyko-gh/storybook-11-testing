## Working as expected

- ::white_check_mark: Standard prop/attr shows correctly, with control
- ::white_check_mark: Read only values don't have control
- 

## Private fields

:x: Private field are visible in the generated documentation, even when correctly flagged in manifest. 
```json
{
  "kind": "field",
  "name": "internalState",
  "type": {
    "text": "number"
  },
  "default": "0",
  "privacy": "private"
}
```
This might not be an issue in Storybook. Should private element be in the custom element manifest at all ? Does it even make sense ?

## Protected fields

Private field are visible in the generated documentation, even when correctly flagged in manifest.
```json
{
  "kind": "field",
  "name": "_protectedInternalState",
  "type": {
    "text": "number"
  },
  "default": "0",
  "privacy": "protected"
}
```
I think protected fields can be in the manifest.

## Static readonly fields

Static readonly field still show with a "Set XXX" control. Non-static readonly seem to be working fine.
```js
/**
 * `Set boolean` control should not be present in generated doc ?
 * @readonly
 */
static staticReadonly = true;
```

## Enum like properties

Enum like properties (described as below) show "Set object" control.

I was not able to select/set a text value matching one of the allowed value. A select would be nice.

```js
/**
 * A simple enumeration property
 * @type {'blue' | 'red' | 'green'}
 */
@property({ type: String })
accessor color;
```

## Attributes and properties name collision

Attributes and properties names collision cause property to not appear (same as storybook-helpers https://github.com/wc-toolkit/storybook-helpers/issues/114)

```js 
  /**
   * Description of the defaultValue property
   */ 
  @property({type: String, attribute: 'value'})
  accessor defaultValue;

  /**
   * The property description shadows the attribute being tied to `defaultValue`
   */
  @property({type: String, attribute: false})
  accessor value;
```

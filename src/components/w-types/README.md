## Working as expected

- ::white_check_mark: Prop with different attribute shows correctly, with one entry in props and one entry in attributes

## Issues

## Enum property control invalid

Enum like properties (described as below) show "Set object" control.

I was not able to select/set a text value matching one of the allowed value. A select would be nice.

```js
/**
 * A simple enumeration property
 * @type {'blue' | 'red' | 'green'}
 */
@property({ type: String })
accessor color = 'red';
```

Manifest
```json
{
  "kind": "field",
  "name": "color",
  "type": {
    "text": "'blue' | 'red' | 'green'"
  },
  "default": "'red'",
  "description": "An enumeration property. Control object seems invalid ?",
  "attribute": "color"
}
```

## Array property control invalid

On an array typed property, the "Set object" control does not allow to set a valid array. 

## Function property control

Function property shows a "Set object" control in the UI. As it's seems difficult to provide a control for specifying a function, I suggest to simply remove the control. 
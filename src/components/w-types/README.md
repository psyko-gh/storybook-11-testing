# OUTDATED (see edit in repo README.md)

![Preview](preview.png)

## Working as expected

- :white_check_mark: String property works fine
- :white_check_mark: Number property works fine
- :white_check_mark: Object property works fine

## Issues

### Enum property control invalid

:x: Enum like properties (described as below) show "Set object" control.

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

#### Expected behavior

The control for enum properties should show a 'Set value' that transform to a select like input when clicked.
This probably should also account for this PR https://github.com/wc-toolkit/storybook-helpers/pull/116, but I never encounter such a need.

---

### Array property control invalid

:x: On an array typed property, the "Set object" control does not allow to set a valid array. 

#### Expected behavior

Control should allow to enter Array like values

---

### Function property control

:x: Function property shows a "Set object" control in the UI. 

#### Expected behavior

As it seems difficult to provide a control for specifying a function, I suggest to simply remove the control.
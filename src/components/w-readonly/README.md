# OUTDATED (see edit in repo README.md)

![Preview](preview.png)

## Objective

Testing respect of 'readonly' CEM flag.

## Working as expected

- :white_check_mark: Readonly props do not have control in UI


## Issues

### Static readonly fields

Static readonly files have a "Set object" control in the UI
```json
{
  "kind": "field",
  "name": "formAssociated",
  "type": {
    "text": "boolean"
  },
  "static": true,
  "default": "true",
  "description": "Should not appear in description",
  "readonly": true
}
```

#### Expected behavior

Static readonly fields should not be visible
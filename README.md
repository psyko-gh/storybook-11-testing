# Storybook 11 docgen testing


Edit:
Oops, look like my setup was wrong and some of the issues appear to come from this.

I'll have to redo my tests :)

It turns out I had injected the CEM twice.

Once in the `preview.js`:
```js
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import manifest from '../custom-elements.json';

setCustomElementsManifest(manifest);
```
And once in the `main.js`:
```js
  framework: {
    name: "@storybook/web-components-vite",
    options: {
      customElementsManifest: '../custom-elements.json'
    }
  }
```
I have tested removing it from the preview.js and most of my issues seems to have vanished



## Objective

Some tests about the integration of features from `wc-toolkit/storybook-helpers` into Storybook 11.

## Tests

- [Names](src/components/w-names/README.md) : tests about names detection.
- [Privacy](src/components/w-names/README.md) : tests about privacy handling.
- [Readonly](src/components/w-names/README.md) : tests about readonly handling.
- [Types](src/components/w-names/README.md) : tests about types detections and matching controls.

## Overall feedbacks

- Native integration fo the CEM feels good.
- It reduces the redundant boilerplate code required to write stories _(`wc-toolkit/storybook-helpers` already did a great job, but native integration pushes it further)_
- Not having a default bound value is a good idea. Having to explicitly hit the "Set string/object" button actually makes it easier to test components default behavior.
- Once thing that would be good, is a button to clear the assigned value in a control, and go back to the unbound value state.
- 
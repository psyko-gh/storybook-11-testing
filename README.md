# Storybook 11 docgen testing

## Objective

Some tests about the integration of features from `wc-toolkit/storybook-helpers` into Storybook 11.

## Tests

- [Names](src/components/w-names/README.md) : tests about names detection - ❌ some issues
- [Privacy](src/components/w-names/README.md) : tests about privacy handling - ✔️ All good
- [Readonly](src/components/w-names/README.md) : tests about readonly handling - ✔️ All good
- [Types](src/components/w-names/README.md) : tests about types detections and matching controls - ❌ some issues
- [Default](src/components/w-defaults/README.md) : tests about props default values - ✔️ All good 

## First issue 

Oops, look like my setup was wrong and some of the issues appear to come from this.

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

This is now fixed, and tests have been adjusted.

## Overall feedbacks

- Native integration fo the CEM feels good.
- It reduces the redundant boilerplate code required to write stories _(`wc-toolkit/storybook-helpers` already did a great job, but native integration pushes it further)_
- Not having a default bound value is a good idea. Having to explicitly hit the "Set string/object" button actually makes it easier to test components default behavior.
- I'm looking forward to having code live update _(previous render of the generated DOM was not ideal either because it was lacking non attribute properties - ie `.prop` or `@event` in Lit)_
- One thing that would be good, is a button to clear the assigned value in a control, and go back to the unbound value state.

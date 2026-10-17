import { setCustomElementsManifest } from '@storybook/web-components-vite';
import manifest from '../custom-elements.json';

setCustomElementsManifest(manifest);

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
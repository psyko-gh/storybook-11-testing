

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  features: {
    docgenServer: true
  },
  framework: {
    name: "@storybook/web-components-vite",
    options: {
      customElementsManifest: '../custom-elements.json'
    }
  }
};
export default config;
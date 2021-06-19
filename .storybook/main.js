module.exports = {
  typescript: {
    reactDocgen: 'react-docgen',
  },
  "stories": [
    "../src/components/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config;
  }
}

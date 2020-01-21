module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs"
  ],
  webpackFinal: config => {
    config.module.rules.unshift({
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve("@storybook/source-loader")],
      enforce: "pre"
    });
    return config;
  }
};

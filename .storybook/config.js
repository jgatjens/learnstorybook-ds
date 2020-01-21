import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { GlobalStyle } from "../src/shared/global";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(
  [
    require.context("../src", false, /Intro\.stories\.mdx/),
    require.context("../src", true, /\.stories\.(js|mdx)$/)
  ],
  module
);

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "kich/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({children, css}) => <Button css={{...css}}>{children}</Button>;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  children: "Click me!",
  css: {
    color: 'white',
    backgroundColor: 'blue',
  }
};
// @ts-nocheck
import React from "react"
import Button from "./Button"

export default {
  title: "kich/Button",
  component: Button,
  argTypes: {
    bg: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
}


const Template = (args) => <Button  {...args} />


export const Primary = Template.bind({});
Primary.args = {
  bg: 'primary',
  children: 'Button Text'
};



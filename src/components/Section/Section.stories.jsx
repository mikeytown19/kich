// @ts-nocheck
import React from "react"
import Section from "./Section"
import Stack from "../Stack"
import Block from "../Block"
import Text from "../Text"
import Box from "../Box"
import Button from "../Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "kich/Section",
  component: Section
}




export const Basic = () => (
  <Section py="12">
    <Stack css={{ "@bp2_min": { ta: "center" } }}>
      <Stack>
        <Text as="h1"> Build anything you want</Text>
        <Text css={{ mw: "$2" }}>
          Plan, build and launch beautiful and consistent user interfaces
          for the web that drives meaningful engagement and growth for your
          brand.
        </Text>
        <Stack
          row
          w_full
          justify="around"
          css={{ mw: "$md", marginInline: "auto" }}
        >
          <Button align="end">Get Started</Button>

          <Button bg="blue" align="start">
            Learn More
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Section>
)

export const split = () => (
  <Section py="12" css={{ bg: "$indigo2" }}>
    <Stack row w_full>
      <Stack column justify="center">
        <Text as="h1">
          Build Fast. <br /> Deliver Faster.
        </Text>

        <Text>
          With an intuitive markup, powerful and lightning fast build tools,
          Clever has everything you need to turn your ideas into incredible
          products.
        </Text>

        <Button>See our Doc's</Button>
      </Stack>


      <Stack column justify="start">
        <Text as="h1">
          Another Column
        </Text>

        <Text>
          With an intuitive markup, powerful and lightning fast build tools,
          Clever has everything you need to turn your ideas into incredible
          products.
        </Text>

        <Button >See our Doc's</Button>
      </Stack>

    </Stack>
  </Section>
)
import React from "react";
import CustomTab from "./CustomTab";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "molecules/CustomTab",
  decorators: [withKnobs],
};

export const Basic = () => {
  return <CustomTab label={text("Label", "Type here...")} />;
};

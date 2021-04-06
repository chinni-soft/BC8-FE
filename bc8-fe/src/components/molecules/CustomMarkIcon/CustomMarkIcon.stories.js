import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import CustomMarkIcon from "./CustomMarkIcon";
import { action } from "@storybook/addon-actions";

export default {
  title: "molecules/CustomMarkIcon",
  decorators: [withKnobs],
};

export const Basic = () => {
  const options = {
    True: true,
    False: false,
  };
  return <CustomMarkIcon value={true} updatePermissionGrantClick={action("Toggled Permission")} />;
};

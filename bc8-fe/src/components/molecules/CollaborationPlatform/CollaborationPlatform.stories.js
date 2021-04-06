import React from "react";
import { storiesOf } from "@storybook/react";
import CollaborationPlatform from "./CollaborationPlatform";
import Google from "../../../images/Google.png";
import {text, withKnobs} from "@storybook/addon-knobs";

storiesOf("Molecules/Card", module)
  .addDecorator(withKnobs)
  .add("Custom", () => (
    <CollaborationPlatform
      variant1="contained"
      value1="Add"
      variant2="outlined"
      value2="Show Preview"
      link={text("Image URL", Google)}
      name={text("name", "Google")}
    />
  ))


import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("atoms/Buttons", module)
  .add("Filled Button", () => <Button variant="contained" value="Add" />)
  .add("Outlined Button", () => (
    <Button variant="outlined" value="Show Preview" />
  ));

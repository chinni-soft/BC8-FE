import React from "react";
import { Tab } from "@material-ui/core";

export default function CustomTab(props) {
  return <Tab {...props} style={{ textTransform: "none" }} />;
}

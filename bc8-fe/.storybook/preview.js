import theme from "../src/utils/theme";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

export const parameters = {
  options: {
    storySort: {
      //  order: ["organisms", "molecules", "atoms"],
      order: [],
      method: "alphabetic",
      locales: "",
    },
  },
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
    ],
  },
};

export const decorators = [
  (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ margin: "3em" }}>
          <Story />
        </div>
      </ThemeProvider>
  ),
];

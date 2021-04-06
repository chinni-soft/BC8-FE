import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../utils/theme";
import TrustGroupNavBar from "./TrustGroupsNavBar";
import { action } from "@storybook/addon-actions";

export default {
  title: "organisms/Trust Group Nav Bar",
  decorators: [withKnobs],
};

const trustgroups = [
  {
    id: "8d4d7810-a513-4956-876b-01c87efc04d6",
    displayName: "DO NOT TRUST",
    description: "Domains that cannot be trusted",
  },
  {
    id: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    displayName: "Top 100",
    description: "Top 100 domains that can be trusted",
  },
  {
    id: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    displayName: "Top 10000",
    description: "Top 10000 domains that can be trusted",
  },
  {
    id: "3d30c4b4-e544-4060-9c96-5335687c090e",
    displayName: "Top 30000",
    description: "Top 30000 domains that can be trusted",
  },
];
const selectedTrustGroupTab = "Google Communication Base";

export const Basic = () => (
  <ThemeProvider theme={theme}>
    <TrustGroupNavBar
      handleTabChange={action("ChangedTrustGroup")}
      value={selectedTrustGroupTab}
      trustgroups={trustgroups}
    />
  </ThemeProvider>
);

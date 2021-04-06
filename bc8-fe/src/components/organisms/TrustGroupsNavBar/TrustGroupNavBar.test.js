import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TrustGroupsNavBar from "./TrustGroupsNavBar";
import { ADD_TRUST_GROUP_TITLE, ALL_EXTERNAL_PARTNERS, GOOGLE_COMMUNICATION_BASE } from "../../../constants";

afterEach(cleanup);
const handleTabChange = jest.fn();
const handleCreateTrustGroup = jest.fn();
describe("TrustGroupsNavBar", () => {
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
  const selectedTrustGroupTab = GOOGLE_COMMUNICATION_BASE;

  test("Check for click on a tab", () => {
    const { getByText } = render(
      <TrustGroupsNavBar handleTabChange={handleTabChange} value={selectedTrustGroupTab} trustgroups={trustgroups} />
    );
    const GCB = getByText(GOOGLE_COMMUNICATION_BASE);
    fireEvent.click(GCB);
    expect(handleTabChange).toBeCalledTimes(1);
  });
  test("Check for change on a tab", () => {
    const { getByText } = render(
      <TrustGroupsNavBar handleTabChange={handleTabChange} value={selectedTrustGroupTab} trustgroups={trustgroups} />
    );
    const Top10000 = getByText("Top 10000");
    fireEvent.click(Top10000);
    expect(handleTabChange).toBeCalledTimes(2);
  });
  test("Check for change on a tab", () => {
    const { getByText } = render(
      <TrustGroupsNavBar handleTabChange={handleTabChange} value={selectedTrustGroupTab} trustgroups={trustgroups} />
    );
    const Top100 = getByText("Top 100");
    fireEvent.click(Top100);
    expect(handleTabChange).toBeCalledTimes(3);
  });
  test("Check for change on a external tab", () => {
    const { getByText } = render(
      <TrustGroupsNavBar handleTabChange={handleTabChange} value={selectedTrustGroupTab} trustgroups={trustgroups} />
    );
    const extTab = getByText(ALL_EXTERNAL_PARTNERS);
    fireEvent.click(extTab);
    expect(handleTabChange).toBeCalledTimes(4);
  });
  test("Check, adding new TrustGroup", () => {
    const { getByTestId } = render(
      <TrustGroupsNavBar
        handleCreateTrustGroup={handleCreateTrustGroup}
        value={selectedTrustGroupTab}
        trustgroups={trustgroups}
      />
    );
    const iconButton = getByTestId("iconButton");
    fireEvent.click(iconButton);
  });
});

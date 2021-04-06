import React from "react";
import { Provider } from "react-redux";
import store from "../../../store";
import { render, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import ModalForCollaborationPlatformContainer from "./ModalForCollaborationPlatformContainer";
import Box from "../../../images/Box.png";
import Figma from "../../../images/Figma.jpg";
import Slack from "../../../images/Slack.png";
import Google from "../../../images/Google.png";
import OneDrive from "../../../images/OneDrive.jpg";
import DocuSign from "../../../images/DocuSign.jpg";

afterEach(cleanup);

describe("ModalForCollaborationPlatformContainer", () => {
  test("check if ModalForCollaborationPlatformContainer is loaded", () => {
    const platformsConfig = [
      { name: "Box", value: "box", link: Box, enabled: true, id: "" },
      { name: "Figma", value: "figma", link: Figma, enabled: true, id: "" },
      { name: "Slack", value: "slack", link: Slack, enabled: true, id: "" },
      { name: "Google Suite", value: "google", link: Google, enabled: true, id: "" },
      { name: "One Drive", value: "oneDrive", link: OneDrive, enabled: true, id: "" },
      { name: "DocuSign", value: "docuSign", link: DocuSign, enabled: true, id: "" },
    ];
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <ModalForCollaborationPlatformContainer platformsConfig={platformsConfig} />
      </Provider>
    );
    expect(getByText("Choose Collaboration Platform")).toBeDefined();
    const boxPlatform = getByTestId("Box");
    expect(boxPlatform).toBeDefined();
    const figmaPlatform = getByTestId("Figma");
    expect(figmaPlatform).toBeDefined();
  });
});

import React from "react";
import { storiesOf } from "@storybook/react";
import ModalForCollaborationPlatform from "./ModalForCollaborationPlatform";
import Box from "../../../images/Box.png";
import Figma from "../../../images/Figma.jpg";
import Slack from "../../../images/Slack.png";
import Google from "../../../images/Google.png";
import OneDrive from "../../../images/OneDrive.jpg";
import DocuSign from "../../../images/DocuSign.jpg";

const platformsConfig = [
  { name: "Box", value: "box", link: Box, enabled: true, id: "" },
  { name: "Figma", value: "figma", link: Figma, enabled: true, id: "" },
  { name: "Slack", value: "slack", link: Slack, enabled: true, id: "" },
  { name: "Google Suite", value: "google", link: Google, enabled: true, id: "" },
  { name: "One Drive", value: "oneDrive", link: OneDrive, enabled: true, id: "" },
  { name: "DocuSign", value: "docuSign", link: DocuSign, enabled: true, id: "" },
];

storiesOf("organisms/Connectors", module).add("Modal", () => (
  <ModalForCollaborationPlatform platformsConfig={platformsConfig} />
));

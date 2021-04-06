import React from "react";
import { useDispatch } from "react-redux";
import { setCollaboration } from "../../../actions/collobartion";
import Box from "../../../images/Box.png";
import Figma from "../../../images/Figma.jpg";
import Slack from "../../../images/Slack.png";
import Google from "../../../images/Google.png";
import OneDrive from "../../../images/OneDrive.jpg";
import DocuSign from "../../../images/DocuSign.jpg";
import ModalForCollaborationPlatform from "./ModalForCollaborationPlatform";
import { GSUITE_ID } from "../../../constants";

const ModalForCollaborationPlatformContainer = (props) => {
  const dispatch = useDispatch();

  const platformsConfig = [
    { name: "Box", value: "box", link: Box, enabled: true, id: "" },
    { name: "Figma", value: "figma", link: Figma, enabled: true, id: "" },
    { name: "Slack", value: "slack", link: Slack, enabled: true, id: "" },
    { name: "Google Suite", value: "google", link: Google, enabled: true, id: GSUITE_ID },
    { name: "One Drive", value: "oneDrive", link: OneDrive, enabled: true, id: "" },
    { name: "DocuSign", value: "docuSign", link: DocuSign, enabled: true, id: "" },
  ];
  return (
    <ModalForCollaborationPlatform
      platformsConfig={platformsConfig}
      closeModal={props.closeModal}
      setCollaboration={(value) => dispatch(setCollaboration(value))}
    />
  );
};

export default ModalForCollaborationPlatformContainer;

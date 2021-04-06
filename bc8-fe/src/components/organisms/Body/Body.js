import React from "react";
import ActivePermission from "../PermissionAccess/ActivePermission";
import BaseComponent from "../BaseComponent/BaseComponent";

const Body = (props) => {
  return <div>{props.collaborator?.id ? <BaseComponent /> : <ActivePermission />}</div>;
};
export default Body;

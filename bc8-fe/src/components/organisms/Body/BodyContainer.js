import React from "react";
import { useSelector } from "react-redux";
import ActivePermission from "../PermissionAccess/ActivePermission";
import Body from "./Body";

const BodyContainer = (props) => {
    const collaborator = useSelector(({appData}) => appData.collaborator);  
  
    return (
     <Body collaborator={collaborator}></Body>
    )
}
export default BodyContainer;
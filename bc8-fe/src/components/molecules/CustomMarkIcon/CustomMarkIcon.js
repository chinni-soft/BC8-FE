import React from "react";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import {DO_NO_TRUST_GROUP_ID} from "../../../constants";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
  },
  customIcon: {
    fontWeight: 100,
    opacity: 1,
    fontSize: 17,
  },
  iconButton: {
    color: "black",
  },
}));

const CustomMarkIcon = (props) => {
  const classes = useStyles();
  const {permissionGrantMapping, permissions} = props;
  const trustGroupId = props.data.id;
  const updatePermission = (permissionGrantMapping, permissions) => {
    const permissionField = props.colDef.field;
    const permission = permissions.find((eachPermission) => eachPermission.name === permissionField);
    if(permission && permission.id){
      const permissionGrant = permissionGrantMapping.find( permissionGrant =>
              permissionGrant.permissionId === permission.id && permissionGrant.trustgroupId == trustGroupId );
      if(permissionGrant && permissionGrant.id){
        props.updatePermissionGrantClick(props, permissionGrant.id);
      }
    }
  }

  return (
    <Grid className={classes.root}>
      <IconButton disabled={ trustGroupId === DO_NO_TRUST_GROUP_ID}
        aria-label=""
        size="small"
        onClick={(event) => updatePermission(permissionGrantMapping, permissions)}
        className={classes.iconButton}
        data-testid="customMarkIcon"
      >
        {props.value ? <DoneIcon className={classes.customIcon} /> : <ClearIcon className={classes.customIcon} />}
      </IconButton>
    </Grid>
  );
};
export default CustomMarkIcon;

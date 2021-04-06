import React, { useState } from "react";
import { makeStyles, Tabs, Tab, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CustomTab from "../../molecules/CustomTab/CustomTab";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { ADD_TRUST_GROUP_TITLE, ALL_EXTERNAL_PARTNERS, GOOGLE_COMMUNICATION_BASE } from "../../../constants";
import CreateModalComponent from "../Modal/CreateModalComponent";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#666666",
    width: "auto",
    height: "45px",
  },
  iconColor: {
    color: "#cccccc",
  },
  iconButton: {
    marginTop: theme.spacing(3.5),
  },
}));

export default function TrustGroupsNavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CreateModalComponent
        open={open}
        modalFor="Trust Group"
        title={ADD_TRUST_GROUP_TITLE}
        handleClose={() => setOpen(false)}
        handleCreateAction={props.handleCreateTrustGroup}
      />
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={props.value} onChange={props.handleTabChange} aria-label="trust groups tabs">
          <CustomTab label={GOOGLE_COMMUNICATION_BASE} value={GOOGLE_COMMUNICATION_BASE} />
          {props.trustgroups.map((trustgroup, index) => {
            if (trustgroup.displayName !== "DO NOT TRUST") {
              return <Tab label={trustgroup.displayName} value={trustgroup.id} />;
            }
          })}
          <CustomTab label={ALL_EXTERNAL_PARTNERS} value={ALL_EXTERNAL_PARTNERS} />
          <Grid className={classes.iconButton}>
            <IconButton onClick={() => setOpen(true)} data-testid="iconButton">
              <AddBoxIcon className={classes.iconColor} />
            </IconButton>
          </Grid>
        </Tabs>
      </AppBar>
    </div>
  );
}

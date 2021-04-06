import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SideBarIcons from "../../atoms/SideBarIcons/SideBarIcons";
import PieChartOutlinedIcon from "@material-ui/icons/PieChartOutlined";
import ClearAllOutlinedIcon from "@material-ui/icons/ClearAllOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import IconButton from "@material-ui/core/IconButton";
import { Typography, makeStyles } from "@material-ui/core";
import {GoogleLogout} from 'react-google-login';
import { useDispatch } from "react-redux";
import { onLoggedOut } from "../../../actions/userAction";
import { CLIENT_ID } from "../../../constants";

const useStyles = makeStyles({
  root: {
    width: "76px",
    height: "44px",
    borderRadius: 0,
    maxHeight: "44px"
  },
  selected: {
    width: "76px",
    height: "44px",
    borderLeft: "2px solid #38888b",
    backgroundColor: "#f6f6f6",
    borderRadius: 0,
    maxHeight: "44px"
  },
  second: {
    width: "76px",
    height: "44px",
    borderLeft: "2px solid #38888b",
    borderRadius: 0,
    maxHeight: "44px"
  },
});

const SideNavigationBar = (props) => {
  const classes = useStyles();
  const [active, setActive] = useState("first");
  const [act, setAct] = useState("first");

  const onLogoutSuccess = () => {
    props.onLogoutSuccess();
  }

  const onFailure = (res) => {
    console.error("Google logout failure ", res);
  }

  return (
    <div style={{ height: "792px", width: "76px" }}>
      <Grid container justify="space-around">
        <Grid item>
          <Grid
            container
            justify="space-between"
            style={{ height: "325px", marginBottom: "125px" }}
          >
            <Grid item>
              <Typography variant="h2" style={{ margin: "12px 0 10px 20px" }}>
                C
              </Typography>
            </Grid>
            <Grid item className={classes.root}>
              <IconButton
                className={active == "first" ? classes.selected : classes.root}
                onClick={() => setActive("first")}
              >
                <SideBarIcons icon={<PieChartOutlinedIcon />} />
              </IconButton>
            </Grid>
            <Grid item className={classes.root}>
              <IconButton
                className={active == "second" ? classes.selected : classes.root}
                onClick={() => setActive("second")}
              >
                <SideBarIcons icon={<ClearAllOutlinedIcon />} />
              </IconButton>
            </Grid>
            <Grid item className={classes.root}>
              <IconButton
                className={active == "third" ? classes.selected : classes.root}
                onClick={() => setActive("third")}
              >
                <SideBarIcons icon={<DescriptionOutlinedIcon />} />
              </IconButton>
            </Grid>
            <Grid item className={classes.root}>
              <IconButton
                className={active == "fourth" ? classes.selected : classes.root}
                onClick={() => setActive("fourth")}
              >
                <SideBarIcons icon={<ThumbUpOutlinedIcon />} />
              </IconButton>
            </Grid>
            <Grid item className={classes.root}>
              <IconButton
                className={active == "fifth" ? classes.selected : classes.root}
                onClick={() => setActive("fifth")}
              >
                <SideBarIcons icon={<SettingsOutlinedIcon />} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.root}>
          <Grid container direction="column" justify="space-between">
            <Grid item>
              <IconButton
                className={act == "first" ? classes.second : classes.root}
                onClick={() => setAct("first")}
              >
                <Typography variant="body1">IN</Typography>
              </IconButton>
            </Grid>
            <Grid item className={classes.root}>
            <GoogleLogout 
              clientId={CLIENT_ID}
              onLogoutSuccess={onLogoutSuccess}
              onFailure={onFailure}
              isSignedIn={true}
              render={renderProps => {
                return (<IconButton
                  className={act == "second" ? classes.second : classes.root}
                  onClick={() => {
                    setAct("second")
                    renderProps.onClick()
                  }}
                >
                  <Typography variant="body1">OUT</Typography>
                </IconButton>)
              }}
            />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideNavigationBar;

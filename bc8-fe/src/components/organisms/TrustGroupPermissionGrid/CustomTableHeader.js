import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../../../utils/theme";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  menuButtonStyle: {
    position: "absolute",
    right: theme.spacing(1.5),
    margin: theme.spacing(0.25),
    opacity: 0.75,
    color: "black",
  },
  customIcon: {
    fontWeight: 400,
    opacity: 0.5,
    fontSize: 18,
    width: 10,
    color: "black",
  },
  headerText: {
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingRight: theme.spacing(1.25),
    paddingLeft: theme.spacing(1.25),
    fontSize: 14,
    color: "black",
  },
  checkBoxStyle: {
    width: "19px",
    color: "black",
  },
}));

const CustomTableHeader = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {props.displayName === "Trust Group" ? (
        <Typography className={classes.customIcon}>A </Typography>
      ) : (
        <IconButton aria-label="" className={classes.checkBoxStyle} size="small">
          {props.displayName === "Number" ? (
            <CheckBoxOutlineBlankIcon className={classes.checkBoxStyle} />
          ) : (
            <CheckBoxIcon className={classes.checkBoxStyle} />
          )}
        </IconButton>
      )}
      {props.displayName === "Number" ? (
        <></>
      ) : (
        <>
          <Typography className={classes.headerText} variant="subtitle1">
            {props.displayName}
          </Typography>
          <IconButton aria-label="Menu" className={classes.menuButtonStyle} size="small">
            <ArrowDropDownIcon />
          </IconButton>
        </>
      )}
    </Grid>
  );
};
export default CustomTableHeader;

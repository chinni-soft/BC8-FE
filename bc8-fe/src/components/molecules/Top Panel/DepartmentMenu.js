import React, { useState } from "react";
import PanelSearchBar from "./PanelSearchBar";
import CustomMenuItem from "./CustomMenuItem";
import Menu from "@material-ui/core/Menu";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    minHeight: "34px",
    padding: theme.spacing(0, 5),
    fontFamily: "Roboto Medium",
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#666666",
  },
  selectedMenuItem: {
    color: theme.palette.primary.main,
  },
  defaultIconColor: {
    color: "#cccccc",
  },
  selectedDepartmentText: {
    padding: theme.spacing(1.25, 2.5),
    fontFamily: "Roboto",
    fontSize: "14px",
    lineHeight: 1.14,
    letterSpacing: "normal",
    color: "#949494",
  },
  inputField: {
    fontSize: "12px",
  },
  underline: {
    "&.MuiInput-underline:after": {
      borderBottom: "solid transparent",
    },
  },
  department: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "250px",
    textAlign: "center",
    padding: theme.spacing(2.5, 5),
    width: "250px",
  },
}));

const DepartmentMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { departments } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const classes = useStyles();
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const handleDepartmentClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDepartmentChange = (index) => {
    if (index !== departments.length - 1) {
      setSelectedIndex(index);
    }
    setAnchorEl(null);
    props.handleDepartmentChange(index);
  };
  return (
    <Grid>
      <Grid
        className={classes.department}
        onClick={handleDepartmentClick}
        data-testid="department"
      >
        <Grid className={classes.selectedMenuItem}>
          <PeopleOutlineIcon />
        </Grid>
        <Typography className={classes.selectedDepartmentText}>{departments[selectedIndex]["displayName"]}</Typography>
      </Grid>
      <Menu
        id="simple-menu"
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <PanelSearchBar
          placeholder="Enable Department Access"
          defaultIconClass={classes.defaultIconColor}
          textFieldClass={classes.menuItem}
          inputClass={classes.inputField}
          underlineClass={classes.underline}
        />
        {departments.map((option, index) => (
          <CustomMenuItem
            key={option.value}
            displayName={option.displayName}
            onClick={(e) => handleDepartmentChange(index)}
            className={index === selectedIndex ? [classes.selectedMenuItem, classes.menuItem] : classes.menuItem}
            selected={index === selectedIndex}
            prefixIcon={option.icon}
            data-testid="custom-menu"
            inputProps={{ "data-testid": "custom-menu" }}
          />
        ))}
      </Menu>
    </Grid>
  );
};
export default DepartmentMenu;

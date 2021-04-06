import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import PanelSearchBar from "../../molecules/Top Panel/PanelSearchBar";
import PanelActions from "../../molecules/Top Panel/PanelActions";
import DepartmentMenu from "../../molecules/Top Panel/DepartmentMenu";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FilterListIcon from "@material-ui/icons/FilterList";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import { ADD_A_DEPARTMENT, ADD_DEPARTMENT_TITLE } from "../../../constants";
import CreateModalComponent from "../Modal/CreateModalComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "46px",
    backgroundColor: "#ffffff",
    position: "relative",
    "& > .MuiInput-underline:after": {
      borderBottom: "solid transparent",
    },
  },
  defaultIconColor: {
    color: "#cccccc",
  },
  searchUnderline: {
    "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "solid transparent",
    },
    "&.MuiInput-underline:before": {
      borderBottom: "solid transparent",
    },
    "&.MuiInput-underline:after": {
      borderBottom: "solid transparent",
    },
  },
  searchInput: {
    fontSize: "12px",
    border: "solid 1px #cccccc",
    borderRadius: "15px",
    height: "8px",
    width: "117px",
    paddingLeft: theme.spacing(2),
  },
  searchTextField: {
    display: "flex",
    width: "250px",
    textAlign: "center",
    padding: theme.spacing(2.5, 5),
  },
  panelSearchBar: {
    position: "absolute",
    right: "0px",
  },
  departmentMenu: {
    marginLeft: theme.spacing(12),
  },
  panelActions: {
    marginLeft: theme.spacing(10),
  },
}));

const TopPanelComponent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  function getPanelActions() {
    return [
      { displayName: "Filter", value: "filter", icon: <FilterListIcon /> },
      { displayName: "Group", value: "group", icon: <ImportExportIcon /> },
      { displayName: "Sort", value: "sort", icon: <SortByAlphaIcon /> },
      { displayName: "", value: "horizIcon", icon: <MoreHorizIcon fontSize="large" /> },
    ];
  }
  function frameDepartments(departments) {
    let departmentList = departments.map((department) => {
      department.icon = <PeopleOutlineIcon fontSize="small" />;
      return department;
    });
    const addDeptObj = {
      displayName: ADD_A_DEPARTMENT,
      icon: <AddCircleOutlineIcon fontSize="small" />,
    };
    departmentList.push(addDeptObj);
    return departmentList;
  }
  const handleDepartmentChange = (index) => {
    if (index === props.departments.length) setOpen(!open);
    else props.handleDepartmentChange(index);
  };

  return (
    <Grid className={classes.root}>
      <CreateModalComponent
        open={open}
        modalFor="Department"
        title={ADD_DEPARTMENT_TITLE}
        handleClose={() => setOpen(false)}
        handleCreateAction={props.handleCreateDepartment}
      />
      <Grid className={classes.departmentMenu}>
        {props.departments.length > 0 && (
          <DepartmentMenu
            departments={frameDepartments(props.departments)}
            handleDepartmentChange={handleDepartmentChange}
            inputProps={{ "data-testid": "departmentMenu" }}
          />
        )}
      </Grid>
      <Grid className={classes.panelActions}>
        <PanelActions actions={getPanelActions()} />
      </Grid>
      <Grid className={classes.panelSearchBar}>
        <PanelSearchBar
          placeholder="search data"
          defaultIconClass={classes.defaultIconColor}
          textFieldClass={classes.searchTextField}
          inputClass={classes.searchInput}
          underlineClass={classes.searchUnderline}
        />
      </Grid>
    </Grid>
  );
};
export default TopPanelComponent;

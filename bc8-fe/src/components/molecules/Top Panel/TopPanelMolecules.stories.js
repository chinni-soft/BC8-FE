import React from "react";
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {makeStyles} from "@material-ui/core";
import theme from "../../../utils/theme";
import FilterListIcon from "@material-ui/icons/FilterList";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DepartmentMenu from "./DepartmentMenu";
import CustomMenuItem from "./CustomMenuItem";
import PanelSearchBar from "./PanelSearchBar";
import PanelActions from "./PanelActions";
import {text, withKnobs} from "@storybook/addon-knobs";


const useStyles = makeStyles(() => ({
    searchUnderline: {
        '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: "solid transparent"
        },
        '&.MuiInput-underline:before': {
            borderBottom: "solid transparent"
        },
        '&.MuiInput-underline:after': {
            borderBottom: "solid transparent"
        }
    },
    searchInput: {
        fontSize: "12px",
        border: "solid 1px #cccccc",
        borderRadius: "15px",
        height: "8px",
        width: "117px",
        paddingLeft: theme.spacing(2)
    },
    searchTextField: {
        display: "flex",
        width: "250px",
        textAlign: "center",
        paddingTop: theme.spacing(2.5),
        paddingBottom: theme.spacing(2.5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    defaultIconColor: {
        color: "#cccccc"
    },
    menuItem: {
        minHeight: "34px",
        padding: "0px 20px",
        fontFamily: "Roboto Medium",
        fontSize: "12px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#666666",
        width: "250px",
    },
    selectedMenuItem: {
        color: "#38888b"
    },
}))

storiesOf("Molecules/Top Panel", module)
    .addDecorator(withKnobs)
    .add("Custom Dropdown", () => {
        const departments = [
            {displayName: text("Department", "Base Template"), value: "baseTemplate", icon: <PeopleOutlineIcon fontSize="small"/>},
            {displayName: "Sales", value: "sales", icon: <PeopleOutlineIcon fontSize="small"/>},
            {displayName: "Legal", value: "legal", icon: <PeopleOutlineIcon fontSize="small"/>},
            {displayName: "Finance", value: "finance", icon: <PeopleOutlineIcon fontSize="small"/>},
            {displayName: "Investor Relation", value: "investorRelation", icon: <PeopleOutlineIcon fontSize="small"/>},
            {displayName: "Add a Department", value: "add", icon: <AddCircleOutlineIcon fontSize="small"/>},
        ];
        return (
            <DepartmentMenu departments={departments} handleDepartmentChange={action("Department change trigger")}/>
        )
    })
    .add("Disabled MenuItem", () => {
        const classes = useStyles();
        return (
            <CustomMenuItem
                displayName={text("Label","Add a Department")}
                onClick={action("Department Add Triggered")}
                className={classes.menuItem}
                selected={false}
                disabled={true}
                prefixIcon={<AddCircleOutlineIcon fontSize="small"/>}
            />
        )
    })
    .add("Regular MenuItem", () => {
        const classes = useStyles();

        return (
            <CustomMenuItem
                displayName={text("Label","Base Template")}
                onClick={action("Department change Triggered")}
                className={classes.menuItem}
                selected={false}
                disabled={false}
                prefixIcon={<PeopleOutlineIcon fontSize="small"/>}
            />
        )
    })
    .add("Selected MenuItem", () => {
        const classes = useStyles();

        return (
            <CustomMenuItem
                displayName={text("Label","Sales")}
                onClick={action("Department change Triggered")}
                className={[classes.menuItem, classes.selectedMenuItem]}
                selected={true}
                disabled={false}
                prefixIcon={<PeopleOutlineIcon fontSize="small"/>}
            />
        )
    })
    .add("Search field", () => {
        const classes = useStyles();
        return (
            <PanelSearchBar
                placeholder={text("Placeholder","search data")}
                defaultIconClass={classes.defaultIconColor}
                textFieldClass={classes.searchTextField}
                inputClass={classes.searchInput}
                underlineClass={classes.searchUnderline}
            />
        )
    })

    .add("Actions", () => {
        const panelActions = [
            {displayName: "Filter", value: "filter", icon: <FilterListIcon/>},
            {displayName: "Group", value: "group", icon: <ImportExportIcon/>},
            {displayName: "Sort", value: "sort", icon: <SortByAlphaIcon/>},
            {displayName: "", value: "", icon: <MoreHorizIcon fontSize="large"/>},
        ]
        return (
            <PanelActions actions={panelActions}/>
        )
    })
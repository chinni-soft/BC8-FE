import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    menuItem: {
        display: "flex"
    },
    displayName: {
        padding: theme.spacing(0.5, 2.5, 0.5, 2.5)
    },
    menuItemText: {
        fontFamily: "Roboto",
        fontSize: "12px",
        color: "#38888b"
    }
}));
const CustomMenuItem = (props) => {
    const {displayName, prefixIcon, iconClass, disabled, selected, className} = props;
    const classes = useStyles();
    return (
        <MenuItem
            onClick={props.onClick}
            className={className}
            selected={selected}
            disabled={disabled}>
            <Grid className={classes.menuItem}>
                <Grid
                    className={iconClass}>
                    {prefixIcon}
                </Grid>
                <Grid className={classes.displayName}>
                    <Typography className={classes.menuItemText}>{displayName}</Typography>
                </Grid>
            </Grid>
        </MenuItem>
    )
}
export default CustomMenuItem;
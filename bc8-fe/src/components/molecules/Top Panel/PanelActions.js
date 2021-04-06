import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100%"
    },
    defaultIconColor: {
        color: "#cccccc"
    },
    action: {
        padding: theme.spacing(1.25, 2.5),
        fontFamily: "Roboto",
        fontSize: "14px",
        lineHeight: 1.14,
        letterSpacing: "normal",
        color: "#949494"
    },
    moreHorizIconPadding: {
        padding: theme.spacing(1.25, 4)
    },
    actionButtonStyle: {
        display: "flex",
        justifyContent: "center",
        width: "80px",
        textAlign: "center",
        marginLeft: theme.spacing(4)
    },
    iconPadding: {
        padding: theme.spacing(2.25, 4),
    },
}));
const PanelActions = (props) => {
    const {actions} = props;
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            {actions.map((action, index) => (
                <Grid key={index}
                      className={action.displayName ? [classes.actionButtonStyle, classes.iconPadding]
                          : [classes.actionButtonStyle, classes.moreHorizIconPadding]}>
                    <Grid className={classes.defaultIconColor}>
                        {action.icon}
                    </Grid>
                    <Typography className={classes.action}>
                        {action.displayName}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    )
}
export default PanelActions;
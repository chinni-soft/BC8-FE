import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import TuneIcon from '@material-ui/icons/Tune';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../../utils/theme";
const useStyles = makeStyles(() => ({
    root:{
        display: "flex",
    },
    menuButtonStyle: {
        position: "absolute",
        right: theme.spacing(2.5),
        margin: theme.spacing(0.25),
        opacity: 0.75
    },
    customIcon: {
        fontWeight: 500,
        opacity:0.5,
        fontSize:18
    },
    headerText: {
        paddingTop: theme.spacing(1.25),
        paddingBottom: theme.spacing(1.25),
        paddingRight: theme.spacing(2.25),
        paddingLeft: theme.spacing(2.25),
        fontSize:14,
        color: theme.palette.header.main
    },
    checkBoxStyle:{
        width: "60px",
        marginTop: "2px"
    },
    groupDropDownPadding: {
        paddingRight: theme.spacing(4)
    }

}))
const CustomTableHeader = (props)=>{
    const onSortRequested= (event)=> {
        if(props.column.isSortAscending()){
            props.setSort("desc", event.shiftKey);
        }
        else if(props.column.isSortDescending() || (!props.column.isSortDescending() && !props.column.isSortAscending())){
            props.setSort("asc", event.shiftKey);
        }
        const newData = props.agGridReact.gridOptions.rowData;
        props.api.setRowData(newData);
        // props.api.redrawRows({force : true});
        //IMP: props.api.refreshCells({force : true});
        // props.api.render();
    }
    const classes = useStyles();
    return(
        <Grid className={classes.root}>
            {props.displayName== "Domain" &&
            <Grid className={classes.checkBoxStyle}>
                <IconButton aria-label="" className={classes.customIcon} size="small">
                    <CheckBoxOutlineBlankIcon fontSize="small" />
                </IconButton>
            </Grid>
            }
            {props.displayName== "Group" ?
                <IconButton aria-label="" className={classes.customIcon} size="small">
                    <ArrowDropDownCircleIcon fontSize="small" />
                </IconButton>
                :props.displayName== "Relationship" ?
                    <IconButton aria-label="" className={classes.customIcon} size="small">
                        <TuneIcon fontSize="small" />
                    </IconButton>
                        :props.trustScoreIcon ?
                        <Typography className={classes.customIcon}># </Typography>
                                : <Typography className={classes.customIcon}>A </Typography>
            }
                <Typography className={classes.headerText} onClick={onSortRequested}>{props.displayName}</Typography>
            <Grid>
                <IconButton aria-label="Menu" className={props.displayName == "Group" ?[classes.menuButtonStyle, classes.groupDropDownPadding] : classes.menuButtonStyle} size="small">
                    <ArrowDropDownIcon fontSize="small"/>
                </IconButton>
            </Grid>
        </Grid>
    )
}
export default CustomTableHeader;
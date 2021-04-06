import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "../../atoms/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {IconButton, makeStyles, Typography} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        width: "200px"
    },
    cardMedia: {
        backgroundColor: "rgba(152,169,188,0.2)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        width: "200px",
        height: "150px",

    },
    cardText: {
        width: "200px",
        height: "54px",
        display: "flex",
        marginLeft: "20px",
        alignItems: "center"
    },
    enabled: {
        width: "200px",
        height: "54px"
    }
}));

const CollaborationPlatform = (props) => {
    const classes = useStyles();
    return (
    <Card className={classes.root}>
      <Grid container direction="column">
          <Grid className={classes.cardMedia} style={{backgroundImage: "url('" + props.link + "')"}}>
            <Grid container justify="flex-end">
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
            </Grid>
          </Grid>
        <Grid item>
          {props.enabled ? (
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.enabled}
              >
                <Grid item>
                  <Button variant={props.variant1} value={props.value1} onClick={()=>props.setCollaboration(props.id)}/>
                </Grid>
                <Grid item>
                  <Button variant={props.variant2} value={props.value2} />
                </Grid>
              </Grid>
          ) : (
            <Grid className={classes.cardText}>
              <Typography variant="body1" style={{ color: "#252631" }}>
                {props.name}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default CollaborationPlatform;

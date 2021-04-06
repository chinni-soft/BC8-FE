import React, { useState } from "react";

import { Typography, makeStyles, Grid, Modal } from "@material-ui/core";
import undraw_booking from "../../../images/undrawBooking.png";
import Button from '../../atoms/Button'
import ModalForCollaborationPlatformContainer from "../ModalForCollaborationPlatform/ModalForCollaborationPlatformContainer";

const useStyles = makeStyles({
    button: {
        width: 206,
        height: 46
    },
    image: {
        width: "449px",
        height: "313px",
    }
});

const ActivePermission = () => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false)
    return (

        <Grid container direction="column" alignItems={"center"} justify={"center"} spacing={8}>
            <Grid item >
                <img className={classes.image}
                    src={undraw_booking}
                />
            </Grid>
            <Grid item >
                <Typography variant="h3" >
                    {"No active permissions"}
                </Typography>
            </Grid>
            <Grid item >
                <Button value="Enable Access" variant="contained" className={classes.button} onClick={() => setOpenModal(true)}></Button>
            </Grid>
            <Grid item xs>
                <Modal
                    open={openModal}
                >
                    <ModalForCollaborationPlatformContainer closeModal={() => setOpenModal(false)} />
                </Modal>
            </Grid>
        </Grid>

    );
};

export default ActivePermission;

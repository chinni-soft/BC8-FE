import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const CreateModalComponent = (props)=>{
    const {open, modalFor }= props;
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState(false);
    const handleInputChange = (event) => {
        setName(event.target.value);
        if(name) setError(false);
    };
    const handleCreateAction= ()=>{
        if(name){
            props.handleCreateAction(name);
            handleClose();
        }
        else {
            setError(true);
        }
    }
    const handleClose = ()=>{
        props.handleClose();
        setError(false);
        setName('');
    }
    return (
        <Grid>
            <Dialog
                minWidth="md"
                fullWidth
                disableBackdropClick
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Create {modalFor} </DialogTitle>
                <DialogContent>
                    <TextField
                        error={error}
                        autoFocus
                        required
                        margin="dense"
                        id={modalFor}
                        label={`${modalFor} name`}
                        inputProps={{
                            "data-testid": "createModalInput"
                        }}
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateAction} color="primary" autoFocus>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}
export default CreateModalComponent;
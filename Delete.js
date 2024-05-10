import React from "react";
import Button from "@material-ui/core/Button";
//import edit from "../assets/Path 18191.svg";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./style.css";

import { Grid } from "@material-ui/core";


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// function clearform() {
//   document.getElementById("formedit").reset();
// }

function Delete() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Button
        id="delete"
        style={{ borderColor: "#57b3fb", color:"white",  paddingRight:"70px",paddingLeft:"70px"}}
        size="small"
        variant="outlined"
        onClick={handleClickOpen}
      >
         Delete
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }}
        >
          Delete Record(s)?
        </DialogTitle>
        <DialogContent className="adddialog" dividers>
          <Grid
            container
            direction="column-reverse"
            justify="center"
            alignItems="center"
          >
            <p style={{color:"#FFFFFF"}}>Are you sure you want to delete these record(s)<br></br> </p>      
         
          </Grid>
        </DialogContent>
        <DialogActions className="adddialog">
          <Button
            autoFocus
            variant="outlined"
            style={{ color: "#FFFFFF" }}
            onClick={handleClose}
            id="resetedit"
          >
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            style={{ background: "#14AFF1", color: "#FFFFFF" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Delete;

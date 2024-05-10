import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import './style.css'
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

  function clearform() { 
    document.getElementById("formedit").reset();
  }

function Edit() {

    const [open, setOpen] = React.useState(false);

    const [invoice_currency,setInvoiceCurrency] = React.useState("");
    const [cust_payment_terms,setCustPaymentTerms] =React.useState("");

    const fetchData = async() => {
      await axios
       .get(`http://localhost:8080/1805719/addservlet?invoice_currency=${invoice_currency}&cust_payment_terms=${cust_payment_terms}`)
       .then((response) => {
         console.log(response);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   const createNewEdit = (e) => {
    e.preventDefault();
    console.log(invoice_currency,cust_payment_terms);
    fetchData();
   }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
          <Button id="edit" variant="outlined" onClick={handleClickOpen}
          style={{ borderColor: "rgba(39, 61, 73, 0.8)", color:"white", paddingRight:"70px",paddingLeft:"68px" }}
          size="small" >
        Edit
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
          Edit Invoice
        </DialogTitle>
        <DialogContent  className="adddialog" dividers>
        <form id="form" onSubmit={(e) => { createNewEdit(e) }}>
          <br></br>
          <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
               <input placeholder="Invoice currency" className="addtext" type="text" value={invoice_currency} required
                onChange={(e) => setInvoiceCurrency(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <input placeholder="Customer Payment Terms" className="addtext" type="text" value={cust_payment_terms} required
                onChange={(e) => setCustPaymentTerms(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              </Grid>
          </form>
        </DialogContent>
        <DialogActions className="adddialog">
        <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
          <Button
            variant="outlined"
            onClick={handleClose}
            style={{ color: "#14AFF1",}}
          >
            Cancel
          </Button>
          </Grid>
          <Button
            autoFocus
            variant="outlined"
            style={{ color: "#FFFFFF" }}
            onClick={clearform}
            id="resetedit"
          >
            Reset
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            style={{ background: "#14AFF1", color: "#FFFFFF" }}
          >
            Save
          </Button>
        </DialogActions>
        
      </Dialog>

    </>
  );
}

export default Edit;

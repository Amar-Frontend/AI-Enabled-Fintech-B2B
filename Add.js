import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import './style.css';
import axios from "axios";
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
    padding: theme.spacing(5),
  },
}))(MuiDialogContent);

function clearform() {
  document.getElementById("form").reset();
}


function Add() {
  const [open, setOpen] = React.useState(false);

  const [business_code, setBusinessCode] = React.useState("")
  const [cust_number, setCustNumber] = React.useState("");
  const [clear_date, setClearDate] = React.useState("");
  const [buisness_year, setBuisnessYear] =React.useState(""); 
  const [doc_id, setDocid] = React.useState("")
  const [posting_date, setPostingDate] = React.useState("");
  const [document_create_date, setdocument_create_date] = React.useState("");
  const [due_in_date, setDueDate ] =React.useState("");
  const [invoice_currency, setInvoiceCurrency] = React.useState("")
  const [document_type, setDocumentType] = React.useState("");
  const [posting_id, setPostingId ]= React.useState("");
  const [total_open_amount, setTotalAmount] = React.useState(""); 
  const [baseline_create_date, setBaselineCreateDate] = React.useState("");
  const [cust_payment_terms, setCustPaymentTerms] = React.useState("");
  const [invoice_id, setInvoiceId] = React.useState("");

  const fetchData = async() => {
    await axios
     .get(`http://http://localhost:8080/H2H_Invoice2/addData?business_code=${business_code}&cust_number=${cust_number}&_clear_date=${clear_date}&buisness_year=${buisness_year}&doc_id=${doc_id}&posting_date=${posting_date}&document_create_date=${document_create_date}&due_in_date=${due_in_date}&invoice_currency=${invoice_currency}&document_type=${document_type}&posting_id=${posting_id}&total_open_amount=${total_open_amount}&baseline_create_date=${baseline_create_date}&cust_payment_terms=${cust_payment_terms}&invoice_id=${invoice_id}`)
     .then((response) => {
       console.log(response);
     })
     .catch((error) => {
       console.log(error);
     });
 };

  const createNewinv = (e) => {
    e.preventDefault();
    console.log(business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date, cust_payment_terms, invoice_id);
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
      <Button
        id="add"
        variant="outlined"
        style={{borderColor:"#57b3fb", color:"white", paddingRight:"70px",paddingLeft:"70px"}}
        size="small"
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
        height="60%"
      >
        <DialogTitle
          className="adddialog"
          onClose={handleClose}
          style={{ color: "#FFFFFF" }}
        >
          Add Invoice
        </DialogTitle>
        <DialogContent className="adddialog" dividers>
          <form id="form" onSubmit={(e) => { createNewinv(e) }}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
               <input placeholder="Business Code" className="addtext" type="text" value={business_code} required
                onChange={(e) => setBusinessCode(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <input placeholder="Customer Number" className="addtext" type="text" value={cust_number} required
                onChange={(e) => setCustNumber(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <input placeholder="Clear date"  className="addtext" type="date" value={clear_date}
                onChange={(e) => setClearDate(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <input placeholder="Buisness Year" className="addtext" type="text" value={due_in_date}
                onChange={(e) => setBuisnessYear(e.target.value)}
              />
            </Grid>
            <br></br>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
               <input placeholder="Document Id" className="addtext" type="text" value={doc_id} required
                onChange={(e) => setDocid(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <input placeholder="Posting Date" className="addtext" type="date" value={posting_date} required
                onChange={(e) => setPostingDate(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <input placeholder="Clear date" className="addtext" type="date" value={document_create_date} required
                onChange={(e) => setdocument_create_date(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <input placeholder="Buisness Year" className="addtext" type="date" value={buisness_year} required
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Grid>
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

            <input placeholder="Document Type" className="addtext" type="text" value={document_type} required
              onChange={(e) => setDocumentType(e.target.value)}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <input placeholder="Posting Id" className="addtext" type="text" value={posting_id} required
              onChange={(e) => setPostingId(e.target.value)}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <input placeholder="Total Open Amount" className="addtext" type="text" value={total_open_amount} required
              onChange={(e) => setTotalAmount(e.target.value)}
            />
          </Grid>
          <br></br>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <input placeholder="Baseline Create date " className="addtext"  type="date" value={baseline_create_date}
                  onChange={(e) => setBaselineCreateDate(e.target.value)}
                />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input placeholder="Customer Payment Terms" className="addtext" type="text" value={cust_payment_terms}
              onChange={(e) => setCustPaymentTerms(e.target.value)}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input placeholder="InvoiceId" className="addtext" type="text" value={invoice_id}
              onChange={(e) => setInvoiceId(e.target.value)}
            />
              </Grid>
              <br></br>
              
              
            </Grid>
            
            <Divider light />
        <Grid
                container
                direction="row"
                style={{marginTop:"2vh"}}
              >
        <Grid
                container
                item xs={6}
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                width="50%"
              >
          <Button
            variant="outlined"
            onClick={handleClose}
            style={{ color: "#14AFF1" }}
            size="small"
          >
            Cancel
          </Button>
            </Grid>
            <Grid
                container
                item xs={6}
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
              >
          <Button
            autoFocus
            variant="outlined"
            style={{ color: "#FFFFFF", float:"right", marginRight:"2vh" }}
            onClick={clearform}
            id="clearadd"
            size="small"
          >
            Clear
          </Button>
          <Button
            autoFocus
            type="submit"
            onClick={handleClose}
            variant="contained"
            style={{ background: "#14AFF1", color: "#FFFFFF", float:"right" }}
            size="small"
          >
                Add
          </Button>
              </Grid>
        </Grid>
          </form>
          </DialogContent>
      </Dialog>
    </>
  );
}
export default Add;

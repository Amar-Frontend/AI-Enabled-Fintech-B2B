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


function Advance_Search() {
  const [open, setOpen] = React.useState(false);

  const [cust_number, setCustNumber] = React.useState("");
  const [doc_id, setDocid] = React.useState("")
  const [buisness_year, setBuisnessYear] =React.useState("");  
  const [invoice_id, setInvoiceId] = React.useState("");



  const fetchData = async() => {
    await axios
     .get(`http://http://localhost:8080/HRC-backend/addData?&cust_number=${cust_number}&buisness_year=${buisness_year}&doc_id=${doc_id}&invoice_id=${invoice_id}`)
     .then((response) => {
       console.log(response);
     })
     .catch((error) => {
       console.log(error);
     });
 };

  const advanceSearch = (e) => {
    e.preventDefault();
    console.log(cust_number,buisness_year,doc_id, invoice_id);
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
        style={{borderColor:"#57b3fb", color:"white", paddingRight:"50px",paddingLeft:"50px"}}
        size="small"
        onClick={handleClickOpen}
      >
        Advance Search
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
          Advance Search
        </DialogTitle>
        <DialogContent className="adddialog" dividers>
          <form id="form" onSubmit={(e) => { advanceSearch(e) }}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
                  <input placeholder="Document Id" className="addtext" type="text" value={doc_id} required
                onChange={(e) => setDocid(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              
             <input placeholder="InvoiceId" className="addtext" type="text" value={invoice_id}
              onChange={(e) => setInvoiceId(e.target.value)}
            />
           
              
             
            </Grid>
            <br></br>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
                 <input placeholder="Customer Number" className="addtext" type="text" value={cust_number} required
                onChange={(e) => setCustNumber(e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <input placeholder="Buisness Year" className="addtext" type="date" value={buisness_year} required
                onChange={(e) => setBuisnessYear(e.target.value)}
              />
            </Grid>
            <br></br>
          
              
            
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
export default Advance_Search;

import React, {useEffect , useState} from 'react'
import axios from 'axios'
import {DataGrid} from '@mui/x-data-grid';


function DataTable() {
  const [data , setData] = useState([]);

    const getJsonData = async () => {
        await axios.get('http://localhost:8080/H2H_Invoice2/DataLoad')
        .then((res) => {
            setData(res.data.data);
            
        });
    };  

    useEffect(() => {
      getJsonData();
    },[]);
  
    const columns = [
      { field: "sl_no", headerName: "Sl_No", width:90 },
      { field: "business_code", headerName: "Business_Code", width:150 },
      { field: "cust_number", headerName: "Cust_Number", width:150 },
      { field: "clear_date", headerName: "Clear_Date", width:150 },
      { field: "buisness_year", headerName: "Buisness_Year", width:150 },
      { field: "doc_id", headerName: "Doc_Id", width:150 },
      { field: "posting_date", headerName: "Posting_Date", width:150 },
      { field: "due_in_date", headerName: "Due_in_date", width:150 },
      { field: "invoice_currency", headerName: "Invoice_Currency", width:150 },
      { field: "document_type", headerName: "Document_Type", width:150 },
      { field: "total_open_amount", headerName: "Total_Open_Amount", width:150 },
      { field: "baseline_create_date", headerName: "Baseline_Create_Date", width:150 },
      { field: "cust_payment_terms", headerName: "Cust_Payment_Terms", width:150 },
      { field: "invoice_id", headerName: "Invoice_Id", width:150 },
      { field: "isOpen", headerName: "Isopen", width:150 },
      { field: "aging_bucket", headerName: "Aging_Bucket", width:150 },
  ];

  const rows = data.map((row) => ({

    sl_no: row.sl_no,
    business_code: row.business_code,
    cust_number: row.cust_number,
    clear_date: row.clear_date,
    buisness_year: row.buisness_year,
    doc_id: row.doc_id,
    posting_date: row.posting_date,
    due_in_date: row.due_in_date,
    invoice_currency: row.invoice_currency,
    document_type: row.document_type,
    total_open_amount: row.total_open_amount,
    baseline_create_date: row.baseline_create_date,
    cust_payment_terms: row.cust_payment_terms,
    invoice_id: row.invoice_id,
    isOpen: row.isOpen,
    aging_bucket: row.aging_bucket,
  
  }));
    console.log(data);
  return (
    <div style={{color:"#ffff",height: 400, width: '100%'}}>
    <DataGrid style={{color:"#ffff"}}
      getRowId={row => row.sl_no}
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
  );
}
export default DataTable





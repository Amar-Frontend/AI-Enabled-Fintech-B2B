import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import RefreshIcon from '@mui/icons-material/Refresh';
// import TextField from '@material-ui/core/TextField';
// import Tablecomp from '../components/Tablecomp';

import Add from '../components/Add';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
// import ViewCr from '../components/View_cr';
import TableData from './DataTable';
import AdvanceSearch from './AdvanceSearch';

function Table() {
    return (
        <div style={{marginRight:"1.9vw", 
                     marginbottom:"3.4vh", 
                     marginTop:"6.2vh", 
                     position:"relative"}}>
                     
            <div style={{ width:"100%", 
                        marginTop:"6.2vh" }}>
                <div className={"tableheader"} 
                     style={{background:"rgb(25, 47, 59)",
                             width:"100%", 
                             height:"10%" }}>
                
                    <ButtonGroup  
                    disableElevation style={{marginLeft:"1.5vh",                                                
                                            color:"white"
                                                     }}>
                        <Button 
                         variant="outlined"
                         style={{borderColor:"#57b3fb",background:"#0a88ef", color:"white", paddingRight:"25px",paddingLeft:"25px"}}
                         size="small">
                         Predict </Button>
                        <Button 
                         variant="outlined"
                         style={{ borderColor: "#57b3fb", color:"white", paddingRight:"20px",paddingLeft:"20px" }}
                         size="small">
                        Analytics View </Button>
                        {/* <Button 
                         variant="outlined"
                         style={{ borderColor: "#57b3fb", color:"white", paddingRight:"25px",paddingLeft:"25px" }}
                         size="small">
                           </Button> */}
                         
                         
                    </ButtonGroup>
                    <AdvanceSearch/>
                    <RefreshIcon/>
                    
                   { /* <Tavlediv/>*/}   
                   <input placeholder='Search Custumer Id' type="text" className='searchBox'/>                 
   
                   <ButtonGroup
                    disableElevation style={{marginLeft:"1.5vh", 
                    marginTop:"0.6vh", 
                    color:"white",
                    float: "right"
                     }}>
                     
                        <Add/> 
                   
                        <Edit/>   
                                           
                        <Delete/> 
                      
                     </ButtonGroup>
                    
                </div>              
            </div>
         <TableData />
        </div>
    )
}
export default Table;


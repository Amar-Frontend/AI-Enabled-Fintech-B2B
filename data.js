import axios from "axios";
 export const getData = async () => {
  let response = await axios.get("http://localhost:8080/H2H_Invoice2/DataLoad");
  
  return response.data.data;
}
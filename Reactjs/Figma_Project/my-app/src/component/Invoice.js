import { useParams } from "react-router-dom";

const Invoice=()=> {
  let params = useParams();
  console.log("hello i am ")
  return <h2>Invoice: {params.invoiceId}</h2>;
}

export default Invoice
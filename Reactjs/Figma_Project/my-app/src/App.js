import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Main from "./component/Main";
import Help from "./component/Help";
import Invoice from "./component/Invoice"
let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
          <li>
          {invoices.map((item)=>(
            <Link to={`/invoices/${item.number}`} key={item.number}>{item.name}</Link>
          ))}
          </li>
          
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Main />} />
          <Route path="/help" element={<Help />} />
          <Route path="/invoices/:invoiceId" element={<Invoice/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

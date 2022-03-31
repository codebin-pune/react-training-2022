import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Main from "./component/Main";
import Help from "./component/Help";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import TaskPage from "./Pages/TaskPage";
import SingleProductPage from "./Pages/SingleProductPage"
import ProductPage from "./Pages/ProductPage"
import Header from "./component/Header";

function App() {
  return (
    <div style={{margin:"100px"}}>
    <Header/>
      <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="product" element={<TaskPage />} />
          <Route path="task" element={<ProductPage />} />
          <Route path="single-product/:id" element={<SingleProductPage/>} />
        </Routes>
    </div>
  );
}

export default App;

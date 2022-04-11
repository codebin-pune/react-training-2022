import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import About from "./pages/About";
import Productpage from "./pages/Productpage";
import TaskPage from "./pages/Taskpage";
import Singlepage from "./pages/Singlepage";
import CartItem from "./pages/CartItem";
import UpImage from "./pages/UpImage";
//import ReactCrop from "react-image-crop/dist/ReactCrop";
//import './App.css';
// const tasks = [
//   {
//     id : 1,
//     text : 'task1',
//     completed : false
//   },
//   {
//     id : 2,
//     text : 'task2',
//     completed : true
//   },
//   {
//     id : 3,
//     text : 'task3',
//     completed : false
//   },
//   {
//     id : 4,
//     text : 'task4',
//     completed : false
//   }
// ];

function App() {
  return (
    <div className="App" style={{marginLeft: 50,margintop:50}}>
     <h1>Hello ...</h1>
     <Header />
      <Routes>
        <Route path="/singlepage/:id" element={<Singlepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/taskpage" element={<TaskPage />} />
        <Route path="/" element={<Productpage />} />
        <Route path="/cartprjao" element={<CartItem />} />
        <Route path="/image" element={<UpImage />} />

      </Routes>
      </div>
  );
}

export default App;

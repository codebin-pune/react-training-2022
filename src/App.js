//import axios from "axios";
//import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
//import ActionButtons from "./component/ActionButtons";
//import Button from "./component/Button";
import Header from "./component/Header";
//import Tasks from "./component/Tasks";
import About from "./pages/About";
import Productpage from "./pages/Productpage";
import TaskPage from "./pages/Taskpage";
import Singlepage from "./pages/Singlepage";
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
      </Routes>
    </div>
  );
}

export default App;

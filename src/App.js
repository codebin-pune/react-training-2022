import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/AboutPage';
import Products from './pages/ProductPage';
import SingleProduct from './pages/SingleProductPage';
import TasksPage from './pages/TaskPage';

const App = () => {
  return (
    <div style={{margin: "100px"}}>
    <Header />
    <Routes>
      <Route path="/" element={< Products/>} />
      <Route path="single-product/:id" element={< SingleProduct/>} />
      <Route path="about" element={<About />} />
      <Route path="tasks" element={<TasksPage />} />
    </Routes>
    </div>
  )
}

export default App;
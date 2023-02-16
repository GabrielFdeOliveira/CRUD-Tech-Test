import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import Header from "./components/Header";


function App() {  
  return (
    <BrowserRouter>    
      <div className="app" data-testid="app">                
      <Header/>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Passing down props from here so I can remove the helper functions from the AddEdit componet */}
          <Route path="/add" element={<AddEdit props/>} />
          <Route path="/edit/:id" element={<AddEdit props />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

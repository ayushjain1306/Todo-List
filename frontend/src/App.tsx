import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DefaultPage from "./DefaultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

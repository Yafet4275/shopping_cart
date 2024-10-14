// import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from 'react';
import { Navbar } from './components/Navbar';
import { ItemList } from './components/itemList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';


function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;

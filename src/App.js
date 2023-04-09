import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';
import About from './pages/about/About';

import './index.css'

function App() {
  return (
    <Router>      
      <header>
        <Header />
      </header>
      <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/produto' element={<Product />} />
            <Route path='/contato' element={<Contact />} />
            <Route path='/sobre' element={<About />} />
          </Routes>
      </main>
    </Router>      
  );
}

export default App;

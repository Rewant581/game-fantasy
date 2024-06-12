// src/App.js

import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './Pages/home';
import Cricket from './Pages/cricket';
import Football from './Pages/football';
import Basketball from './Pages/basketball';
import Baseball from './Pages/baseball';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Disclaimer from './Pages/Disclaimer';
import Privacy from './Pages/Privacy';
import Fairplay from './Pages/fairplay';
import Refund from './Pages/refund';
import About from './Pages/about';
import Terms from './Pages/terms';





function App() {
  return (
    <Router>
    <div className="App">
    <home/>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cricket" element={<Cricket />} />
      <Route path="/football" element={<Football />} />
      <Route path="/basketball" element={<Basketball />} />
      <Route path="/baseball" element={<Baseball />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/fairplay" element={<Fairplay />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      
      </Routes> 
           <Footer />
    </div>
    </Router>
  );
}

export default App;

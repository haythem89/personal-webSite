
import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Education from './components/education/education';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
      </BrowserRouter>
      
      
    );
  }

}

export default App;

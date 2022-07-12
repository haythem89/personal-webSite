
import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;

import React, { Component } from 'react';
import Home from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Antipasti from './components/Antipasti';
import Primi from './components/Primi';
import Secondi from './components/Secondi';
import Pizze from './components/Pizze';
import Dolci from './components/Dolci';
import Cart from './components/Cart';

class App extends Component {

  render() {
    return (
      <>

        <BrowserRouter>
          <div className="sans-serif">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Antipasti' element={<Antipasti />} />
              <Route path='/Primi' element={<Primi />} />
              <Route path='/Secondi' element={<Secondi />} />
              <Route path='/Pizze' element={<Pizze />} />
              <Route path='/Dolci' element={<Dolci />} />
              <Route path='/Cart' element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

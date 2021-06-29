import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Homepage from './pages/hompage.component';
import ShopPage from './pages/shop/shop.component.jsx'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={ Homepage }/>
      <Route path='/hatspage' component={ HatsPage }/>
      <Route path='/shop' component={ ShopPage }/>
    </div>
  )
}

export default App;
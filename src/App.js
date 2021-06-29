import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/hompage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route path='/hatspage' component={ HatsPage }/>
        <Route path='/shop' component={ ShopPage }/>
      </Switch>
    </>
  )
}

export default App;
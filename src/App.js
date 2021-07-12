import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/hompage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


// Due to the fact that we need to access some special methods or properties or whatever of the auth from the App commponent, then we should convert the App component into a class based component. such as: 

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    // the onAuthStateChanged helps us to keep tracl of when the user information has been changed. 
    this.unsubscribeFromAuth =  auth.onAuthStateChanged ( user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <>
        <Header currentUser = { this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={ Homepage }/>
          <Route path='/shop' component={ ShopPage }/>
          <Route path='/signin' component={ SignInAndSignUpPage }/>
        </Switch>
      </>
    )
  }
}

export default App;
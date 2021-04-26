import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import "./App.css";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51Ik2QDKonIC4bazsf3Kn239pwoChdP7MkJgP1xcYhKCSAhjzSqGm1cE0ulRZYKU4DpNsq0QGycpWYfpgnfCFr72l0010ikyYrl')

function App() {
  const [, dispatch] = useStateValue();

  //Manage State of Log-in by Redux 
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        
      } else {
        // the user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
            <Header />  
            <Orders/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

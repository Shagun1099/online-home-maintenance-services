import React from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Booking from './Booking';
import Login from './Login';
import Profile from './Profile';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
	<Router>
    <div className="app">
	<Switch>
	<Route path="/orders">
	 <Header/>
     <Orders/>
     </Route>
	 <Route path="/profile">
	 <Header/>
     <Profile/>
     </Route>
	 <Route path="/login">
     <Login />
     </Route>
	 <Route path='/booking/:id'>
	 <Header/>
	  <Booking/>
	 </Route>
	 <Route path='/'>
	 <Header/>
	  <Home/>
	 </Route>
	</Switch>
	 </div>
	 </Router>
  );
}

export default App;

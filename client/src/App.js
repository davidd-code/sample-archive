import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AuthComponent from './components/authentication/authenticate'
import HomePage from './components/home';
import ShowUserPage from './components/authentication/show-user'
import Header from './components/header';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" exact component={HomePage} />
      <Route path="/profile" component={ShowUserPage} />
      <Route path="/getUser/:token" component={AuthComponent} />
    </Router>
  );
}

export default App;

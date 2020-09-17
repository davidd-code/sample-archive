import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthComponent from './components/authentication/authenticate'
import HomePage from './components/home';
import ShowUserPage from './components/authentication/show-user'
import Header from './components/header';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      {/* <Route path="/" exact component={AuthComponent} /> */}
      <Route path="/" exact component={HomePage} />
      <Route path="/getUser/:token" component={ShowUserPage} />
    </Router>
  );
}

export default App;

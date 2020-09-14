import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthComponent from './components/authentication/authenticate'
import ShowUserPage from './components/authentication/show-user'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={AuthComponent} />
      <Route path="/getUser/:token" component={ShowUserPage} />
    </Router>
  );
}

export default App;

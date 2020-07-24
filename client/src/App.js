import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthComponent from './components/authentication/authenticate'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={AuthComponent} />
    </Router>
  );
}

export default App;

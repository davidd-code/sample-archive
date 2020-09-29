import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthComponent from './components/authentication/authenticate'
import HomePage from './components/home';
import ShowUserPage from './components/authentication/show-user';
import PlaylistPage from './components/playlist';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" component={ShowUserPage} />
        <Route path="/playlists" component={PlaylistPage} />
        <Route path="/getUser/:token" component={AuthComponent} />
      </Switch>
   </Router>
  );
}

export default App;

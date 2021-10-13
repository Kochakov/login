import React from 'react';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import './Login.css';
import Navbar from './components/Navbar'
import Main from './components/Main';
import News from './components/News';
import PrivateRoute from './components/PrivateRoute';

function App() {

  

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

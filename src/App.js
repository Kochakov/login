import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import './Login.css';
import Navbar from './components/Navbar'
import Main from './components/Main';
import News from './components/News';

function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/News">
            <News />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

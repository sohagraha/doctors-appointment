import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

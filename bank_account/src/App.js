
import React, {Component} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header"
import BankAccounts from "./components/BankAccounts"
import "./App.css"
import { Routes, Route, Link } from "react-router-dom";
//import HomePage from "./components/HomePage"
import LogIn from "./components/LogIn"


class App extends Component {
  render() {
    return (
      <div>
      <h2>User Profile</h2>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile/LogIn">LogIn</Link>
          </li>
          <li>
            <Link to="/userProfile/BankAccount">Account</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/BankAccount" element={<BankAccounts />} />
      </Routes>
    </div>
    );
  }
}

export default App;



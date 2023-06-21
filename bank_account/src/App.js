
import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import LogIn from "./components/LogIn"
import Header from "./components/Header"
import BankAccounts from "./components/BankAccounts"

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
            <Link to="/userProfile/BankAccounts">Account</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/BankAccounts" element={<BankAccounts />} />
      </Routes>
    </div>
    );
  }
}

export default App;



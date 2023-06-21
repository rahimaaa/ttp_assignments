
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css"
import LogIn from "./components/LogIn"
import Header from "./components/Header"
import BankAccounts from "./components/BankAccounts"
import HomePage from "./components/HomePage"

class App extends Component {
  render() {
    return (
      
       <BrowserRouter>
       <div>
       <Header />

       <nav>
         <ul>
           <li>
             <Link to="/LogIn">LogIn</Link>
           </li>
           <li>
             *<Link to="/">Home</Link>
           </li>
         </ul>
       </nav>

       <Routes>
       <Route path="/LogIn/*" element={<LogIn />} />
        <Route path="/" element={<HomePage />} /> 
       </Routes>
     </div>
     </BrowserRouter>
    
    );
  }
}

export default App;



import React, {Component} from "react";
import { Link, useNavigate } from "react-router-dom";


function BankAccounts() {
  const navigate = useNavigate();
  
  const navigateToUser = () => {
    console.log("NAVIGATED");
    // Navigate to the settings page
    return navigate("/BankAccounts/User");
  };

  return (
    <div>
      <h2>Profile Details</h2>

      <button onClick={navigateToUser}>User</button>

      <nav>
        <ul>
          <li>
            <Link to="/LogIn">LogIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BankAccounts;
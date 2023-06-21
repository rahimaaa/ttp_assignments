import {BrowserRouter as Router} from 'react-router-dom';
import React, {Component, useState, useEffect} from "react"
import "../App.css"

class LogIn extends Component {
  User =()=>{
   const [UserName, setUserName] = useState('')
   const [Password, SetPassword] = useState('')

  
  }

 
    render() {
      return (
          <div>
            
            <h1></h1>
            <form>
           <input 
           type = "text"
           id = "username"
           className = "form--input " 
           placeholder = "UserName"/>
           <input 
           type = "text"
           id = "password"
           className = "form--input" 
           placeholder = "Password"
           />
          
           <button id = "login" >LogIn </button>

            </form>
          </div>
      
      );
    }
  
}
  export default LogIn;
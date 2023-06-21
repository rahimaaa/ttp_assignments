import {BrowserRouter as Router} from 'react-router-dom';
import React, {Component} from "react"


class HomePage extends Component {
    render() {
      return (
          <div>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>
          </div>
      );
    }
  }
  
  export default HomePage;
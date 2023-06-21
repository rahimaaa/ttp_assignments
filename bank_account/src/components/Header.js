import React from "react"
import {BrowserRouter as Router} from 'react-router-dom';


export default function Header() {
    return (
        <header className="header">
            <img 
                src="" 
                className="header--image"
            />
            <h2 className="header--title">Bank Account</h2>
           
            <h4 className="header--project"></h4>
        </header>
    )
}
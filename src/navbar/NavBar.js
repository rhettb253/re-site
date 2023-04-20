import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render(){
        return(
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/prevtransactions">PREVIOUS TRANSACTIONS</Link></li>
                <li><Link to="/ftbr">FIRST TIME BUYER RESOURCES</Link></li>
                <li><Link to="/about">ABOUT ME</Link></li>
            </ul>
        )
    }
}

export default NavBar;
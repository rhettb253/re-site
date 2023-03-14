import React from "react";
import './NavBar.css'

class NavBar extends React.Component {
    render(){
        return(
            <ul>
                <li><a href="www.google.com">HOME</a></li>
                <li><a href="www.google.com">PREVIOUS TRANSACTIONS</a></li>
                <li><a href="www.google.com">FIRST TIME BUYER RESOURCES</a></li>
            </ul>
        )
    }
}

export default NavBar;
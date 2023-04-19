import React from "react";
import './NavBar.css'

class NavBar extends React.Component {
    render(){
        return(
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT ME</a></li>
                <li><a href="www.google.com">PREVIOUS TRANSACTIONS</a></li>
                <li><a href="www.google.com">FIRST TIME BUYER RESOURCES</a></li>
            </ul>
        )
    }
}

export default NavBar;
import React from "react";
import './NavBar.css'

class NavBar extends React.Component {
    render(){
        return(
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT ME</a></li>
                <li><a href="/prevtransactions">PREVIOUS TRANSACTIONS</a></li>
                <li><a href="/ftbr">FIRST TIME BUYER RESOURCES</a></li>
            </ul>
        )
    }
}

export default NavBar;
import React from "react";
import './NavBar.css'

class NavBar extends React.Component {
    render(){
        return(
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">PREVIOUS TRANSACTIONS</a></li>
                <li><a href="#">FIRST TIME BUYER RESOURCES</a></li>
            </ul>
        )
    }
}

export default NavBar;
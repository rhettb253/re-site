import React from "react";
import './Banner.css';
import realitorimg from "../assets/realitorimg.jpeg";
import NavBar from '../navbar/NavBar';

class Banner extends React.Component {
    render(){
        return(
            <div className="banner">
                <img src={realitorimg} alt="realitor" />
                <div>
                    <h2>"Together we'll get you to the place you want to be."</h2>
                    <NavBar />
                </div>
            </div>
        )
    }
}

export default Banner;
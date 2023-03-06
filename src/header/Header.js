import React from "react";
import './Header.css';
import Banner from '../banner/Banner';

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <Banner />
            </div>
        )
    }
}

export default Header;

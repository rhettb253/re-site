import React from "react";
import './Page2.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BioService from "../bioservice/BioService";
import Reviews from "../reviews/Reviews";

class Page2 extends React.Component{
    render(){
        return(
            <div className="page2">
                <Header />
                <BioService />
                <Reviews />
                <Footer />
            </div>
        )
    }
}

export default Page2;
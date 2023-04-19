import React from "react";
import './Page2.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BioService from "../navbar/bioservice/BioService";

class Page2 extends React.Component{
    render(){
        return(
            <div className="page2">
                <Header />
                <BioService />
                <Footer />
            </div>
        )
    }
}

export default Page2;
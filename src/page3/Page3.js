import React from "react";
import './Page3.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PrevTrans from "../prevtrans/PrevTrans";

class Page3 extends React.Component{
    render(){
        return(
            <div className="page3">
                <Header />
                <PrevTrans />
                <Footer />
            </div>
        )
    }
}

export default Page3;
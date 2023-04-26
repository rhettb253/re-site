import React from "react";
// import Card from "react-bootstrap/Card";
import './PrevTrans.css';

class PrevTrans extends React.Component {
    render() {
        return (
            <div className="prevtrans">
                <h2>Previous Transactions</h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={require("../assets/properties/2731.webp")} />
                            {/* <div class="card" style={{width: "18rem"}}>
                                <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div> */}
                        </div>
                        <div className="col">
                            Column
                        </div>
                        <div className="col">
                            Column
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrevTrans
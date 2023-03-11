import React from 'react';
import Buyer from '../buyer/Buyer';
import Seller from '../seller/Seller';
import './GetConnected.css';

class GetConnected extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.createForm = this.createForm.bind(this);
    }

    handleChange(event) {
        const buysell = event.target.value;
        this.props.onChange(buysell)
    }

    createForm() {
        if (this.props.clientWantsTo === "buy") {
            let form = <Buyer
                buyerInfo={this.props.buyerInfo}
                newBuyerHandler={this.props.newBuyerHandler} />;
            return form;    
        } else if (this.props.clientWantsTo === 'sell') {
            let form = <Seller 
                sellerInfo={this.props.sellerInfo} />;
            return form;
        }
    }

    render() {
        return (
            <div className='getconnected'>
                <h2>Let's Get Connected!</h2>
                <div className="question1">
                    <h3>Tell me why you are here:</h3>
                    <p>I am interested in
                        <select name="introInput" id="introInput" onChange={this.handleChange}>
                            <option value={null}>buying/selling</option>
                            <option value="sell">selling</option>
                            <option value="buy">buying</option>
                        </select>
                    my home.</p>
                </div>
                {this.createForm()}
            </div>
        )
    }

}

export default GetConnected;
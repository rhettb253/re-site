import React from "react";
import Card from "react-bootstrap/Card";
import './PrevTrans.css';
import soldArray from "../soldArray.json";

class PrevTrans extends React.Component {
    render() {
        return (
            <div className="prevtrans">
                <h2>Previous Transactions</h2>
                <div className="container">
                    {soldArray.map((property, idx) => (
                        <Card key={idx} style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{property.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{property.address}</Card.Subtitle>
                          <Card.Img src={require('../assets/properties/'+property.path)} />
                        </Card.Body>
                      </Card>
                    ))}
                </div>
            </div>
        )
    }
}

export default PrevTrans


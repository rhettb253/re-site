import React from "react";
import Card from 'react-bootstrap/Card'

class Review extends React.Component {
    render() {
        return (
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.attribute}</Card.Subtitle>
                    <Card.Text>
                        {this.props.review}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Review;
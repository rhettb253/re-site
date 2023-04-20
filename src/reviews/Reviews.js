import React from "react";
import Review from '../review/Review';
import './Reviews.css';

class Reviews extends React.Component {
    render() {
        return (
            <div className="reviewsSection">
                <h3>Reviews</h3>
                <div className="reviews">
                    <Review name="Michael Jackson" attribute="Singer/Songwriter" review="&quot;Mallory gave me the best walkthrough of my life. I will never regret using her as my agent.&quot;" />
                    <Review name="Bobby Dylan" attribute="Lawyer" review="&quot;Mallory never ceased to pick up her phone and call me when I needed.&quot;" />
                    <Review name="Peter Pettigrew" attribute="Dark Arts Magic Wielder" review="&quot;Even though I kept turning into a rat and was continuously getting attacked by dogs, Mal stuck with me even when she was ready to commit suicide.&quot;" />
                </div>
            </div>
        )
    }
}

export default Reviews;
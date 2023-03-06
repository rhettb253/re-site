import React from 'react';
import './GetConnected.css';

class GetConnected extends React.Component{
    constructor (props) {
        super(props);
        this.introStatement =
        <div>
                   
        </div>
    }
    render(){
        return(
            <div className='getconnected'>
                <h2>Let's Get Connected!</h2>
                <div className="question1">
                    <h3>Tell me why you are here:</h3>
                    <p>I am interested in 
                        <select name="introInput" id="introInput">
                            <option>select</option>
                            <option value="sell">selling</option>
                            <option value="buy">buying</option>
                        </select>
                    my home.</p>
                </div>
            </div>
            )
        }
            // <form>
            //     <fieldset>
            //         <legend>
            //         </legend>
            //     </fieldset>
            // </form>
    // componentDidMount(){
        
    // }
}

export default GetConnected;
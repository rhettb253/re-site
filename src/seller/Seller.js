import React from 'react';
import './Seller.css';

class Seller extends React.Component {
    timeframeHandler(event) {
        if (event.target.value === 'Yes') {
            let timeframeLocation = document.getElementById('timeframeDiv');
            let newHeaderEl = document.createElement('h4');
            let newTextEl = document.createElement('textarea');
            newHeaderEl.id = 'textAreaLabel';
            newHeaderEl.innerText = 'Tell me about your timeframe:';
            newHeaderEl.style.marginLeft = '2rem';
            newTextEl.id = 'timeframeTextArea';
            newTextEl.placeholder = "I will be moving up to Washington on the 27th and once I am there I will have accomodations for another month.";
            timeframeLocation.appendChild(newHeaderEl);
            timeframeLocation.appendChild(newTextEl);
        }
        else if (event.target.value === 'No' && document.getElementById('timeframeTextArea')) {
            let textEl = document.getElementById('timeframeTextArea');
            let headerEl = document.getElementById('textAreaLabel');
            headerEl.remove();
            textEl.remove();
        }
    }

    render() {
        return (
            <div className='seller'>
                <div className="question3">
                    <h3>Please tell me about the home you would like to sell:</h3>
                </div>
                <form id="buyerform" onSubmit={this.props.newBuyerHandler}>
                    <fieldset form='buyerform'>
                        <div>
                            <h4>What type of home are you selling?</h4>
                            <input type='checkbox' id='house' name='house' value='house' />
                            <label htmlFor='house'>House</label>
                            <input type='checkbox' id='townhome' name='townhome' value='townhome' />
                            <label htmlFor='townhome'>Townhome</label>
                            <input type='checkbox' id='condo' name='condo' value='condo' />
                            <label htmlFor='condo'>Condo</label>
                            <input type='checkbox' id='multifamily' name='multifamily' value='multifamily' />
                            <label htmlFor='multifamily'>Multi-family</label>
                            {/* <input type='checkbox' id='lotLand' name='lotLand' value='lotLand' />
                            <label htmlFor='lotLand'>Lot/Land</label> */}
                        </div>
                        <div>
                            <label htmlFor="price">Home Price:</label>
                            <select name="price" id="price">
                                <option value=''>What do you believe is the current value the home?</option>
                                <option value='$300k to $350k'>$300,000 to $350,000</option>
                                <option value='$350k to $400k'>$350,000 to $400,000</option>
                                <option value='$400k to $450k'>$400,000 to $450,000</option>
                                <option value='$450k to $500k'>$450,000 to $500,000</option>
                                <option value='$500k to $550k'>$500,000 to $550,000</option>
                                <option value='$550k to $600k'>$550,000 to $600,000</option>
                                <option value='$600k to $650k'>$600,000 to $650,000</option>
                                <option value='$650k to $700k'>$650,000 to $700,000</option>
                                <option value='$700k to $750K'>$700,000 to $750,000</option>
                                <option value='$750k to $800k'>$750,000 to $800,000</option>
                                <option value='$800k to $850k'>$800,000 to $850,000</option>
                                <option value='$850k to $900k'>$850,000 to $900,000</option>
                                <option value='$900k to $1million'>$900,000 to $100,000,000</option>
                                <option value='$1million to $1.25million'>$1,000,000 to $1,250,000</option>
                                <option value='$1.25million to $1.5million'>$1,250,000 to $1,500,000</option>
                                <option value='$1.5million to $2million'>$1,500,000 to $2,000,000</option>
                                <option value='$2million++'>$2,000,000+</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sqft">Square Footage:</label>
                            <input type='text' name='sqft' id='sqft' placeholder='1,780sqft' />
                        </div>
                        <div>
                            <label htmlFor="lot">Lot Size:</label>
                            <input type='text' name='lot' id='lot' placeholder='8,230 sqft' />
                        </div>
                        <div>
                            <label htmlFor="beds">Bedrooms:</label>
                            <select name="beds" id="beds">
                                <option value=''>How many bedrooms does the home have?</option>
                                <option value='1+'>1 or more</option>
                                <option value='2+'>2 or more</option>
                                <option value='3+'>3 or more</option>
                                <option value='4+'>4 or more</option>
                                <option value='5+'>5 or more</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="baths">Bathrooms:</label>
                            <select name="baths" id="baths">
                                <option value=''>How many bathrooms does the home have?</option>
                                <option value='1'>1</option>
                                <option value='1.5'>1.5</option>
                                <option value='2'>2</option>
                                <option value='2.5'>2.5</option>
                                <option value='3'>3</option>
                                <option value='3.5'>3.5</option>
                                <option value='4'>4</option>
                            </select>
                        </div>
                        <div>
                            <h4>What is the home's address?</h4>
                            <label htmlFor="streetaddress">Street Address:</label>
                            <input type='text' name='streetaddress' id='streetaddress' placeholder='1234 N. Street Ave' />
                        </div>
                        <div>
                            <label className='sellCityLabel' htmlFor="sellCity">City:</label>
                            <input type='text' name='sellCity' id='sellCity' placeholder='Seattle' />
                        
                            <label className='zipLabel' htmlFor="zip">Zip Code:</label>
                            <input type='text' name='zip' id='zip' placeholder='98403' />
                        </div>
                        <div>
                            <h4>Anything else I should know about?</h4>
                            <textarea id="extraInfo" name="extraInfo" placeholder="I have a pool in the backyard! The home is in really bad shape and has black mold in two of the bathrooms. Etc..."></textarea>
                        </div>
                        <div id='timeframeDiv'>
                            <label htmlFor="timeframe">Are you on a timeframe?</label>
                            <select name="timeframe" id="timeframe" onChange={this.timeframeHandler}>
                                <option value=''>yes/no</option>
                                <option value='Yes'>yes</option>
                                <option value='No'>no</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='fullName'>Your Full Name:</label>
                            <input type='text' name='fullName' id='fullName' placeholder='John Smith' />
                        </div>
                        <div>
                            <label htmlFor='email'>Your Email:</label>
                            <input type='email' name='email' id='email' placeholder='johnsmith@gmail.com' />
                        </div>
                        <button id='sellerButton' type='submit'>Send Details</button>
                    </fieldset>
                </form>
            </div >
        )
    }
}

export default Seller;
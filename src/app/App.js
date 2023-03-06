import React from 'react';
import './App.css';
import Header from '../header/Header';
import AboutMe from '../aboutme/AboutMe';
import GetConnected from '../getconnected/GetConnected';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        num : 0,
        wantsTo: '',

      }
  }
  render(){
    return (
      <div className='app'>
        <Header />
        <AboutMe />
        <GetConnected wantsTo={this.state.wantsTo}/>
        {/*<Footer /> */}
      </div>
    );
  }
}

export default App;

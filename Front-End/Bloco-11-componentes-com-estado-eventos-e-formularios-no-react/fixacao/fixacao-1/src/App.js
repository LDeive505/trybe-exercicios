import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleB1 = this.handleB1.bind(this);
    this.handleB2 = this.handleB2.bind(this);
    this.handleB3 = this.handleB3.bind(this);

    this.state = {
      bt1Clicks: 0,
      bt2Clicks: 0,
      bt3Clicks: 0
    };
  }

  handleB1 = () => {
    this.setState(({bt1Clicks}) => ({
      bt1Clicks: bt1Clicks + 1,
    }));
  }

  handleB2 = () => {
    this.setState(({bt2Clicks}) => ({
      bt2Clicks: bt2Clicks + 1,
    }));
  }

  handleB3 = () => {
    this.setState(({bt3Clicks}) => ({
      bt3Clicks: bt3Clicks + 1,
    }));
  }

  render() {
    return(<div className='App'>
            <button onClick={this.handleB1}>{this.state.bt1Clicks}</button>
            <button onClick={this.handleB2}>{this.state.bt2Clicks}</button>
            <button onClick={this.handleB3}>{this.state.bt3Clicks}</button>
          </div>)
    
  }
}

export default App;
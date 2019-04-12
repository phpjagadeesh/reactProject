import React, { Component } from 'react';
import Userinput from './UserInput/UserInput.js';
import input from './UserInput/UserInput.css';
import Useroutput from './UserOutput/UserOutput.js'



class App extends Component {

  state = {
  	content: [
      {text: "The details gets from above Input to next paragraph"},
      {text: ""},
      showPara: true
  	]
  };

  inputDatahandler = (event) => {
    this.setState ({
    	content: [
         { text: ""},
         {text: event.target.value}
    	]
    })
  }

  toggleHandker = () => {
  	const tog = this.state.showPara;
    this.setState({this.state.showPara: !tog});
    console.log(this.state.showPara, 'showPara');
  }

  render() {

    const style = {
      width: '100%',
      padding: '12px 20px',
      margin: '8px 0',
      display: 'inline-block',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box'
    }

    return (
      <div>
        <Userinput className={input} change={this.inputDatahandler} styleCss={style}/>
        <Useroutput textcontent="The details gets from above Input to next paragraph"/>
        <Useroutput textcontent={this.state.content[1].text}/>
        <button onClick={this.toggleHandker()}>Click Me</button>
      </div>
    );
  }
}

export default App;

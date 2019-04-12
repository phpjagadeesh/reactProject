import React, { Component } from 'react';
import userInput from './UserInput.css';

class Input extends Component {

	render () {
	  return (
	    <div className="input">
        What are you thinking: <input onChange={this.props.change} style={this.props.styleCss}/> 
	    </div>
	  )	
	};
}

export default Input;
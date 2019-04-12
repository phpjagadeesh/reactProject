import React, {Component} from 'react';
import out from './UserOut.css';

class Useroutput extends Component {
	render (props) {
		return (
        <div className="out">{this.props.textcontent}</div>
   
		);
	}
}

export default Useroutput;
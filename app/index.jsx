import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  render() {
  	 return <div>Hello ReactJS SSS - By ES6 | Auto Refresh!</div>
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));

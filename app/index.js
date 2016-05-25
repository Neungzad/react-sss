var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS SSS 2 !</div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));
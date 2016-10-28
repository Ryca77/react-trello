var React = require('react');
var ReactDom = require('react-dom');

var Card = function(props) {
	return (
		<div className="card">
			<div className="card-content">{props.text}</div>
		</div>
	);
};

module.exports = Card;
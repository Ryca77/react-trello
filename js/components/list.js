var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = function(props) {
	return (
		<div className="list">
			<div className="list-title">{props.title}</div>
			<Card text="This is card one" />
			<Card text="This is card two" />
			<Card text="This is card three" />
		</div>
	);
};

module.exports = List;
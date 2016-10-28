var React = require('react');
var ReactDom = require('react-dom');

var Card = function() {
	var cardContent = 'This is a card';
	return (
		<div className="card">
			<div className="card-content">{cardContent}</div>
		</div>
	);
};

module.exports = Card;
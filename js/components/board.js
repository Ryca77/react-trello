var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./list-container');

var Board = React.createClass({
	render: function() {
		var listTitles = [];
		for (var i = 0; i < 3; i++) {
			listTitles.push(<ListContainer />);
		}
		return (
			<div className="board">
				<h1 className="board-title">{"Board Title"}</h1>
				<ListContainer className="container" title="List One Title" />
				<ListContainer className="container" title="List Two Title" />
				<ListContainer className="container" title="List Three Title" />
			</div>
		);
	}
});

module.exports = Board;
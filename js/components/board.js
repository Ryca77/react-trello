var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

var Board = React.createClass({
	render: function() {
		var listTitles = [];
		for (var i = 0; i < 3; i++) {
			listTitles.push(<List />);
		}
		return (
			<div className="board">
				<h1 className="board-title">{"Board Title"}</h1>
				<List title="List One Title" />
				<List title="List Two Title" />
				<List title="List Three Title" />
			</div>
		);
	}
});

module.exports = Board;
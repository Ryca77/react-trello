var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = React.createClass({

	//invoke callbacks on user interactions and show inputs on new cards
	render: function(props) {
		return (
			<div className="list">
				<Card text={this.props.cards} />
				<form className="form">
					<input className="add-input" type="text" placeholder="New Card" onChange={this.props.onAddInputChanged}></input>
					<button className="submit" type="button" onClick={this.props.onAddSubmit}>Submit</button>
				</form>
			</div>
		);
		console.log('card');
	}

});

module.exports = List;
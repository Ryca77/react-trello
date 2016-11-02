var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = React.createClass({

	//invoke callbacks on user interactions and show inputs on new cards
	render: function(props) {
		var cards = this.props.cards;
		console.log(cards);
		var cardArray = cards.map(function(content) {			
			return <Card text={content} />
		});
		return (
			<div className="list">
				<div>{cardArray}</div>
				<form className="form">
					<input className="add-input" type="text" placeholder="New Card" onChange={this.props.onAddInputChange} value={this.props.value} />
					<button className="submit" type="button" onClick={this.props.onAddSubmitClick}>Submit</button>
				</form>
			</div>
		);
		
		
		console.log(cards);
	}

});

module.exports = List;
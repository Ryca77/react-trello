var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = React.createClass({
	getInitialState: function() {
		return {
			cards: [],
			text: ''
		};
	},

	//get input value
	onAddInputChanged: function(event) {
		this.setState({
			text: event.target.value
		});
		console.log('input changed')
	},

	//access current state of input value and add to array
	onAddSubmit: function(event) {
		event.preventDefault();
		var cards = this.state.cards;		
		cards.push(this.state.text);
		this.setState({			
			cards: cards
		});
		console.log(this.state.cards);
	},

	//invoke callbacks on user interactions and show lists
	render: function(props) {
		return (
			<div className="list">
				<div className="list-title">{this.props.title}</div>
				<Card text={this.state.cards} />
				<Card text="This is card two" />
				<Card text="This is card three" />
				<form className="form">
					<input className="add-input" onChange={this.props.onAddInputChanged} value={this.props.value}></input>
					<button className="submit" onClick={this.props.onAddSubmit}>Submit</button>
				</form>
			</div>
		);
	}

});

module.exports = List;


/*var cards = [];
var value = '';
	return {
		cards: card
		value: value
	};
var card = this.state.card.concat(<Card value={value} key={this.state.card.length} />);*/
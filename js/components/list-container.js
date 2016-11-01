var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

//make stateful component
var ListContainer = React.createClass({
	//set the initial state
	getInitialState: function() {
		return {
			text: '',
			cards: []
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
		var input = this.state.text;
		var cards = this.state.cards;		
		cards.push(input);
		this.setState({
			text: '',			
			cards: cards
		});
		console.log(this.state.cards);
		console.log(input);
	},

	//pass cards array from the state as the cards prop
	render: function(props) {
		return (
			<div className="list">
				<div className="list-title">{this.props.title}</div>
				<List cards={this.state.cards} onAddInputChange={this.onAddInputChanged} onAddSubmitClick={this.onAddSubmit} />
			</div>
		);
	}

});

module.exports = ListContainer;
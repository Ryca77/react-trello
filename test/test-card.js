var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/components/card');

describe('Card component', function() {
	it('Renders the card component', function() {

		var renderer = TestUtils.createRenderer();
		renderer.render(<Card />);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('card');
		result.type.should.equal('div');

		var card = result.props.children;
		card.type.should.equal('div');
		card.props.className.should.equal('card-content');
	});
});
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List = require('../js/components/list');

//these tests fail as property of .map in list.js is undefined
describe('List component', function() {
	it('Renders the list component with input and submit elements', function() {
		var cards = ["CardTest1", "CardTest2", "CardTest3"];

		var renderer = TestUtils.createRenderer();
		renderer.render(<List card={cards} />);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('list');
		result.type.should.equal('div');

		var form = result.props.children[1];
		form.type.should.equal('form');
		form.props.className.should.equal('form');
		
		var input = form.props.children[0];
		input.props.className.should.equal('add-input');
		var submit = form.props.children[1];
		submit.props.className.should.equal('submit');
	});
});
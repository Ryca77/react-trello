var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../js/components/board');

describe('Board component', function() {
	it('Renders the board component and three instances of list container', function() {
		var title = "Test Board";
		var lists = ["TestList1", "TestList2", "TestList3"];

		var renderer = TestUtils.createRenderer();
		renderer.render(<Board />);
		var result = renderer.getRenderOutput();
		result.type.should.equal('div');
		
		var title = result.props.children[0];
		title.type.should.equal('h2');
		title.props.className.should.equal('board-title');

		var container = result.props.children[1];
		container.props.className.should.equal('container');
	});
});
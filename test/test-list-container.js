var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var ListContainer = require('../js/components/list-container');

describe('ListContainer component', function() {
	it('Renders the list containers with titles and cards with content', function() {

		var renderer = TestUtils.createRenderer();
		renderer.render(<ListContainer />);
		var result = renderer.getRenderOutput();

		var list = result.type.should.equal('div');

		var title = result.props.children[0];
		title.type.should.equal('div');
		title.props.className.should.equal('list-title');

		var card = result.props.children[1];
		
	});
});
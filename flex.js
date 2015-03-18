var React = require('react'),
	Box,
	Item;

Box = React.createClass({displayName: "Box",
	getDefaultProps: function() {
		return {
			prefix: (navigator.userAgent.indexOf('AppleWebKit') > -1) ? 'Webkit' : (navigator.userAgent.indexOf('MSIE') > -1) ? 'ms' : null,
			justifyContent: 'flex-start',
			alignItems: 'stretch'
		};
	},
	getInitialState: function() {
		return {
			style: { display: (this.props.prefix === 'Webkit') ? '-webkit-flex' : (this.props.prefix === 'ms') ? '-ms-flex' : 'flex' }
		};
	},
	render: function() {
		var props = this.props,
			prefix = props.prefix,
			style = this.state.style;
		// update style according to box props
		// flex-direction
		style[prefix ? prefix + 'FlexDirection' : 'flexDirection'] = props.column ? 'column' : 'row';
		// flex-wrap
		style[prefix ? prefix + 'FlexWrap' : 'flexWrap'] = props.nowrap ? 'nowrap' : 'wrap';
		// justify-content
		style[(prefix && prefix !== 'ms') ? prefix + 'JustifyContent' : 'justifyContent'] = props.justifyContent;
		// align-items
		style[(prefix && prefix !== 'ms') ? prefix + 'AlignItems' : 'alignItems'] = props.alignItems;

		return (
			React.createElement("div", {style: style}, 
				props.children
			)
		);
	}
});

Item = React.createClass({displayName: "Item",
	getDefaultProps: function() {
		return {
			prefix: (navigator.userAgent.indexOf('AppleWebKit') > -1) ? 'Webkit' : (navigator.userAgent.indexOf('MSIE') > -1) ? 'ms' : null,
			flex: '0 1 auto',
			alignSelf: 'auto'
		};
	},
	getInitialState: function() {
		return {
			style: {}
		};
	},
	render: function() {
		var props = this.props,
			prefix = props.prefix,
			style = this.state.style;
		// update style according to item flex prop
		// flex
		style[prefix ? prefix + 'Flex' : 'flex'] = props.flex;
		// align-self
		style[(prefix && prefix !== 'ms') ? prefix + 'AlignSelf' : 'alignSelf'] = props.alignSelf;

		return (
			React.createElement("div", {style: style}, 
				props.children
			)
		);
	}
});

module.exports = {Box: Box, Item: Item};
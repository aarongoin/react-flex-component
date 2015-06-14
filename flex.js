import React from 'react';

class Box extends React.Component {
	static defaultProps = {
		prefix: (navigator.userAgent.indexOf('AppleWebKit') > -1) ? 'Webkit' : (navigator.userAgent.indexOf('MSIE') > -1) ? 'ms' : null,
		justifyContent: 'flex-start',
		alignItems: 'stretch'
	};

	constructor(props) {
		super(props);
		this.state = {
			style: { display: (this.props.prefix === 'Webkit') ? '-webkit-flex' : (this.props.prefix === 'ms') ? '-ms-flex' : 'flex' }
		};
	}

	render() {
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
			<div style={style}>
				{this.props.children}
			</div>
		);
	}
}

class Item extends React.Component {
	static defaultProps = {
		prefix: (navigator.userAgent.indexOf('AppleWebKit') > -1) ? 'Webkit' : (navigator.userAgent.indexOf('MSIE') > -1) ? 'ms' : null,
		flex: '0 1 auto',
		alignSelf: 'auto'
	};

	constructor(props) {
		super(props);
		this.state = {
			style: {}
		};
	}

	render() {
		var props = this.props,
			prefix = props.prefix,
			style = this.state.style;
		// update style according to item flex prop
		// flex
		style[prefix ? prefix + 'Flex' : 'flex'] = props.flex;
		// align-self
		style[(prefix && prefix !== 'ms') ? prefix + 'AlignSelf' : 'alignSelf'] = props.alignSelf;

		return (
			<div style={style}>
				{this.props.children}
			</div>
		);
	}
}

export default {Box: Box, Item: Item};

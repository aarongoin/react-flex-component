'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Box = (function (_React$Component) {
	function Box(props) {
		_classCallCheck(this, Box);

		_get(Object.getPrototypeOf(Box.prototype), 'constructor', this).call(this, props);
		this.state = {
			style: { display: this.props.prefix === 'Webkit' ? '-webkit-flex' : this.props.prefix === 'ms' ? '-ms-flex' : 'flex' }
		};
	}

	_inherits(Box, _React$Component);

	_createClass(Box, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    prefix = props.prefix,
			    style = this.state.style;
			// update style according to box props
			// flex-direction
			style[prefix ? prefix + 'FlexDirection' : 'flexDirection'] = props.column ? 'column' : 'row';
			// flex-wrap
			style[prefix ? prefix + 'FlexWrap' : 'flexWrap'] = props.nowrap ? 'nowrap' : 'wrap';
			// justify-content
			style[prefix && prefix !== 'ms' ? prefix + 'JustifyContent' : 'justifyContent'] = props.justifyContent;
			// align-items
			style[prefix && prefix !== 'ms' ? prefix + 'AlignItems' : 'alignItems'] = props.alignItems;

			return _react2['default'].createElement(
				'div',
				{ style: style },
				this.props.children
			);
		}
	}], [{
		key: 'defaultProps',
		value: {
			prefix: navigator.userAgent.indexOf('AppleWebKit') > -1 ? 'Webkit' : navigator.userAgent.indexOf('MSIE') > -1 ? 'ms' : null,
			justifyContent: 'flex-start',
			alignItems: 'stretch'
		},
		enumerable: true
	}]);

	return Box;
})(_react2['default'].Component);

var Item = (function (_React$Component2) {
	function Item(props) {
		_classCallCheck(this, Item);

		_get(Object.getPrototypeOf(Item.prototype), 'constructor', this).call(this, props);
		this.state = {
			style: {}
		};
	}

	_inherits(Item, _React$Component2);

	_createClass(Item, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    prefix = props.prefix,
			    style = this.state.style;
			// update style according to item flex prop
			// flex
			style[prefix ? prefix + 'Flex' : 'flex'] = props.flex;
			// align-self
			style[prefix && prefix !== 'ms' ? prefix + 'AlignSelf' : 'alignSelf'] = props.alignSelf;

			return _react2['default'].createElement(
				'div',
				{ style: style },
				this.props.children
			);
		}
	}], [{
		key: 'defaultProps',
		value: {
			prefix: navigator.userAgent.indexOf('AppleWebKit') > -1 ? 'Webkit' : navigator.userAgent.indexOf('MSIE') > -1 ? 'ms' : null,
			flex: '0 1 auto',
			alignSelf: 'auto'
		},
		enumerable: true
	}]);

	return Item;
})(_react2['default'].Component);

exports['default'] = { Box: Box, Item: Item };
module.exports = exports['default'];
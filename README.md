react-flex-component
====================

CSS Flexbox in component form for ReactJS.

## Installation
```sh
npm install react-flex-component
```
## Code Example

Simple two-piece component architecture, Box to define a flexbox space, Item to define an item within a flexbox

app.jsx
```js
var React = require('react'),
	Flexbox = require('react-flex-component'),
	Box = Flexbox.Box,
	Item = Flexbox.Item,
	FlexableLayout = React.createClass({
		render: function() {
			return (
				<Box column justifyContent='flex-end'>
					<Item>
						<Box nowrap>
							<Item>Read me</Item>
							<Item>from left</Item>
							<Item>to right.</Item>
						</Box>
					</Item>
					<Item>I</Item>
					<Item>am</Item>
					<Item>tall.</Item>
				</Box>
			);
		}
	});

React.render(<FlexableLayout />, document.body);
```

## Components

### Box

Renders a flexbox container.

Props:
- column (boolean) <Box column> creates column layout. <Box> defaults to row layout.
- nowrap (boolean) <Box nowrap> prevents wrapping, default is to wrap
- justifyContent (string) See MDN's justify-content [syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#Syntax) for valid values.
- alignItems (string) See MDN's align-items [syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items#Syntax) for valid values.

### Item

Renders a flexbox item.

Props:
- flex (string) See MDN's flex [docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) for details and valid values.
- alignSelf (string) See MDN's align-self [syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self#Syntax) for valid values.

## More

For more info on CSS flexbox check out MDN's [docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes).

## Contributors

Aaron Goin

## License

This content is released under the MIT License.
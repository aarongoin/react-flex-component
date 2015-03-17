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
						<Box row nowrap>
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

## Components

### Box

Renders a flexbox container.

Props:
column
nowrap
justifyContent
alignItems

### Item

Renders a flexbox item.

Props:
flex
alignSelf

## Contributors

Aaron Goin

## License

This content is released under the [MIT License](https://github.com/aarongoin/react-flex-component/LICENSE.txt).
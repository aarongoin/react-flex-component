var React = require('react'),
	Flexbox = require('../flex.js'),
	Box = Flexbox.Box,
	Item = Flexbox.Item,
	Example = React.createClass({
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

React.render(<Example />, document.body);
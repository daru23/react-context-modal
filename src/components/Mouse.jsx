import React, {Component} from 'react';

export class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }
    handleMouseMove = (e) => {
        this.setState({x: e.nativeEvent.clientX, y: e.nativeEvent.clientY});
    };
    render () {
        return (
            <div ref="elem" onMouseMove={this.handleMouseMove} style={{height: '200px'}}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Mouse;
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
        e.stopPropagation();
        this.setState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
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
import React, {Component} from 'react';

export class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }
    handleMouseMove = (event, offsetX, offsetY) => {
        this.setState({
            x: offsetX,
            y: offsetY,
        });
    };
    render () {
        return (
            <div onMouseMove={(e) => this.handleMouseMove(e, e.nativeEvent.offsetX, e.nativeEvent.offsetY)} style={{height: '200px'}}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Mouse;
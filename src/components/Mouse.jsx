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
        e.preventDefault();
        e.stopPropagation();
        console.log(e.clientX, e.pageX, e.screenX);
        this.setState({x: e.clientX - 70, y: e.clientY - 320});
    };
    render () {
        return (
            <div ref="elem" onMouseMove={this.handleMouseMove} style={{position: 'relative', height: '200px', border: 'solid 1px black'}}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Mouse;
import React, {Component} from 'react';

export class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let position = this.wrapperRef.getBoundingClientRect();
        this.setState({x: e.clientX - position.left, y: e.clientY - position.top});
    };
    render () {
        return (
            <div  ref={this.setWrapperRef}  onMouseMove={this.handleMouseMove} style={{position: 'relative', height: '200px', border: 'solid 1px black'}}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Mouse;
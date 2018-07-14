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
        this.position = this.wrapperRef.getBoundingClientRect();
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        this.setState({x: e.clientX - this.position.left, y: e.clientY - this.position.top});
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
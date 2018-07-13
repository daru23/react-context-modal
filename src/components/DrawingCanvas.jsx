import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
export class DrawingCanvas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawing: false,
            x: 0,
            y:0
        }
    }
    setWrapperRef = (node) => {
        this.wrapperRef = node;
        this.position = this.wrapperRef.getBoundingClientRect();
        console.log(this.position);
    };
    calculateX = (e) => {
      return e.nativeEvent.offsetX
    };
    calculateY = (e) => {
        return e.nativeEvent.offsetY
    };
    onMouseDown = (event) => {
        // console.log(event.clientX, event.nativeEvent.offsetY, event.nativeEvent.screenY, this.position.y);
        console.log(event.clientY, event.nativeEvent.offsetY, event.nativeEvent.screenY, this.position.y);
        console.log( event.clientY - this.position.y);
        this.setState({
            drawing: true,
            x: this.calculateX(event),
            y: this.calculateY(event)
        });
    };
    onMouseUp = (event) => {
        const {drawing, x, y} = this.state;
        const {color} = this.props;
        if (!drawing) {
            return;
        }
        this.setState({
            drawing: false
        });
        this.drawLine(x, y, this.calculateX(event), this.calculateY(event), color, true);
    };
    onMouseMove = (event) => {
        const {drawing, x, y} = this.state;
        const {color} = this.props;
        if (!drawing) {
            return;
        }
        this.drawLine(x, y, this.calculateX(event), this.calculateY(event), color, true);
        this.setState({
            x: this.calculateX(event),
            y: this.calculateY(event)
        });
    };
    drawLine = (x0, y0, x1, y1, color, emit) => {

        let canvas = this.wrapperRef;
        let context = canvas.getContext('2d');
        let w = canvas.width;
        let h = canvas.height;
        console.log(`x0: ${x0} x1: ${x1}`);
        console.log(`y0: ${y0} y1: ${y1}`);
        // context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.strokeStyle = color;
        context.lineWidth = 2;
        context.stroke();
        // context.closePath();
        // if (!emit) {
        //     return;
        // }
        // socket.emit('drawing', {
        //     x0: x0 / w,
        //     y0: y0 / h,
        //     x1: x1 / w,
        //     y1: y1 / h,
        //     color: color
        // });
    };
    render() {
        return (
            <div>
                <canvas className="whiteboard" ref={this.setWrapperRef} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp} onMouseDown={this.onMouseDown}> </canvas>
            </div>
        );
    }
}

DrawingCanvas.propTypes = {
    color: PropTypes.string.isRequired,
};

export default DrawingCanvas;

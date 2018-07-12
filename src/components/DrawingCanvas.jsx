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
    };
    onMouseDown = (event) => {
        this.setState({
            drawing: true,
            x: event.nativeEvent.pageX - event.nativeEvent.offsetX,
            y: event.nativeEvent.pageY - event.nativeEvent.offsetY
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
        this.drawLine(x, y, event.nativeEvent.pageX - event.nativeEvent.offsetX, event.nativeEvent.pageY - event.nativeEvent.offsetY, color, true);
    };
    onMouseMove = (event) => {
        const {drawing, x, y} = this.state;
        const {color} = this.props;
        if (!drawing) {
            return;
        }
        this.drawLine(x, y, event.nativeEvent.pageX - event.nativeEvent.offsetX, event.nativeEvent.pageY - event.nativeEvent.offsetY, color, true);
        this.setState({
            x: event.nativeEvent.pageX - event.nativeEvent.offsetX,
            y: event.nativeEvent.pageY - event.nativeEvent.offsetY
        });
    };
    drawLine = (x0, y0, x1, y1, color, emit) => {

        let canvas = this.wrapperRef;
        let context = canvas.getContext('2d');
        let w = canvas.width;
        let h = canvas.height;

        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.strokeStyle = color;
        context.lineWidth = 2;
        context.stroke();
        context.closePath();

        if (!emit) {
            return;
        }



        // socket.emit('drawing', {
        //     x0: x0 / w,
        //     y0: y0 / h,
        //     x1: x1 / w,
        //     y1: y1 / h,
        //     color: color
        // });
    };
    render() {
        const {color} = this.props;
        return (
            <div className="card" style={{width: "750px", height: "750px"}}>
                <canvas className="whiteboard" ref={this.setWrapperRef} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp} onMouseDown={this.onMouseDown}> </canvas>
            </div>
        );
    }
}

DrawingCanvas.propTypes = {
    color: PropTypes.string.isRequired,
};

export default DrawingCanvas;

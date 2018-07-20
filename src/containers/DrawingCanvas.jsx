import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class DrawingCanvas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawing: false,
            x: 0,
            y: 0,
            socket: null,
        };
    }

    componentDidMount() {
        this.setState({socket: this.props.socket});
    };

    static getDerivedStateFromProps(props, state) {
        if (state.socket !== props.socket) {
            return {socket: props.socket};
        }
        return null;
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };
    calculateX = (e) => {
        let position = this.wrapperRef.getBoundingClientRect();
        return e.clientX - position.left;
    };
    calculateY = (e) => {
        let position = this.wrapperRef.getBoundingClientRect();
        return e.clientY - position.top;
    };
    onMouseDown = (event) => {
        let eventX = this.calculateX(event);
        let eventY = this.calculateY(event);
        this.setState({
            drawing: true,
            x: eventX,
            y: eventY,
        });
    };
    onMouseUp = (event) => {
        const {drawing, x, y} = this.state;
        const {color} = this.props;
        if (!drawing) {
            return;
        }
        let eventX = this.calculateX(event);
        let eventY = this.calculateY(event);
        this.setState({
            drawing: false,
        });
        this.drawLine(x, y, eventX, eventY, color, true);
    };
    onMouseMove = (event) => {
        const {drawing, x, y} = this.state;
        const {color} = this.props;
        if (!drawing) {
            return;
        }
        let eventX = this.calculateX(event);
        let eventY = this.calculateY(event);
        this.drawLine(x, y, eventX, eventY, color, true);
        this.setState({
            x: eventX,
            y: eventY,
        });
    };
    drawLine = (x0, y0, x1, y1, color, emit) => {

        const {socket} = this.props;

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
        socket.emit('drawing', {
            x0: x0 / w,
            y0: y0 / h,
            x1: x1 / w,
            y1: y1 / h,
            color: color,
        });
    };
    onDrawingEvent = (data) => {
        let canvas = this.wrapperRef;
        let w = canvas.width;
        let h = canvas.height;
        this.drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
    };
    onClearCanvas = () => {
        let canvas = this.wrapperRef;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

    };

    render() {

        const {socket} = this.props;

        if (socket) {
            socket.on('drawing', this.onDrawingEvent);
        }

        return (
            <div className="">
                <div className="canvas-margin">
                    <canvas className="whiteboard" ref={this.setWrapperRef} onMouseMove={this.onMouseMove}
                            width={500} height={500}
                            onMouseUp={this.onMouseUp} onMouseDown={this.onMouseDown}> </canvas>
                </div>
                <div className="canvas-margin">
                    <button type="button" className="btn btn-outline-secondary" onClick={this.onClearCanvas}>clear</button>
                </div>
            </div>
        );
    }
}

DrawingCanvas.propTypes = {
    color: PropTypes.string.isRequired,
};

export default DrawingCanvas;

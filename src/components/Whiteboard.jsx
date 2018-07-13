import React, {Component} from 'react';
// Components
import ColorPicker from './ColorPicker';
import DrawingCanvas from './DrawingCanvas';
// CSS
import './whiteboard.css';

export class Whiteboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
        };
    }

    onChangeColor = (color) => {
        console.log("changing color");
        this.setState({color: color});
    };

    render() {
        return (
            <div className="whiteboard-container">
                <ColorPicker onChangeColor={this.onChangeColor}/>
                <div>
                    <DrawingCanvas color={this.state.color}/>
                </div>
            </div>
        );
    }
}

export default Whiteboard;

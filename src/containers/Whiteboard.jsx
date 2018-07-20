import React, {Component} from 'react';
// Components
import ColorPicker from '../components/ColorPicker';
import DrawingCanvas from './DrawingCanvas';
// CSS
import '../styles/whiteboard.css';
// Utils
import {createSocket} from '../utils/sockets';

export class Whiteboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            numUsers: 1,
            socket: null,
            socketId: null,
        };
    }

    componentDidMount() {
        createSocket().then((socket) => {
            this.setState({socket: socket.socket, socketId: socket.id}, () => {
                this.emitAddUser();
            });
        }).catch(err => console.log(err));
    }

    emitAddUser = () => {
        this.state.socket.emit('add user', this.state.socketId);
    };

    componentDidUpdate() {
        const {socket} = this.state;
        if (socket) {
            socket.on('user joined', this.onUpdateUsers);
        }
    }

    componentWillUnmount() {
        this.state.socket.on('disconnect', function() {});
    }

    onChangeColor = (color) => {
        this.setState({color: color});
    };
    onUpdateUsers = (data) => {
        this.setState({numUsers: data.numUsers});
    };

    render() {
        const {socket, numUsers} = this.state;
        if (socket) {
            socket.on('user joined', this.onUpdateUsers);
        }
        return (
            <div className="whiteboard-container">
                <p className="paragraph">Open another browser and share the board.</p>
                <div className="alert alert-info" role="alert">{`Users online: ${numUsers}`}</div>
                <ColorPicker onChangeColor={this.onChangeColor}/>
                <div>
                    <DrawingCanvas color={this.state.color} onUpdateUsers={this.onUpdateUsers}
                                   socket={this.state.socket}/>
                </div>
            </div>
        );
    }
}

export default Whiteboard;

import React, {Component} from 'react';
// Components
import GameMode from './GameMode';
import GameBoard from './GameBoard';
import UserPlays from './UserPlays';

export class RockPaperScissors extends Component {

    constructor(props) {
        super(props);
        this.symbols = ['rock', 'paper', 'scissors'];
        this.state = {
            player1:null,
            player2:null,
            winner: null
        }
    }

    startGame = () => {
        this.setState({
            player1: this.symbols[Math.floor(Math.random() * 3)],
            player2: this.symbols[Math.floor(Math.random() * 3)],
        })
    };

    render() {

        const {player1, player2} = this.state;

        return (
            <div className="card mx-auto game-box-size">
                <div className="card-header">
                    <div className="mx-auto center-title">
                        Rock, Paper, Scissors
                    </div>
                </div>
                <div className="card-body">
                    <GameMode startGame={this.startGame}/>
                    <GameBoard player1={player1} player2={player2}/>
                </div>
                <div className="card-footer text-muted grey-layer" >
                    <UserPlays/>
                </div>
            </div>
        );
    }

}

export default RockPaperScissors;

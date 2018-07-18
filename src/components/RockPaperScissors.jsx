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
            player1: null,
            player2: null,
            winner:  null
        }
    }

    startGame = () => {
        this.setState({
            player1: this.symbols[Math.floor(Math.random() * 3)],
            player2: this.symbols[Math.floor(Math.random() * 3)],
        }, () => {
            this.setState({winner: this.whoIsTheWinner()})
        })
    };

    whoIsTheWinner = () => {
        const {player1, player2} = this.state;
        if ((player1 === player2) && player1 && player2) {
            return "It's a draw!"
        }
        if ((player1 === 'rock' && player2 === "scissors") || (player1 === 'scissors' && player2 === "paper") ||
            (player1 === 'paper' && player2 === "rock")) {
            return "Payer1 wins!"
        }
        return "Player2 wins!"
    };

    render() {
        const {player1, player2, winner} = this.state;
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
                    <p className="text-center">{winner}</p>
                </div>
                <div className="card-footer text-muted grey-layer" >
                    <UserPlays/>
                </div>
            </div>
        );
    }

}

export default RockPaperScissors;

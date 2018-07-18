import React, {Component} from 'react';
// Components
import GameMode from './GameMode';
import GameBoard from './GameBoard';
import UserPlays from './UserPlays';

export class RockPaperScissors extends Component {

    /*
     * Game Modes
     * 1 computer vs computer
     * 2 computer vs user
     * 3 user vs user
     */

    constructor(props) {
        super(props);
        this.symbols = ['rock', 'paper', 'scissors'];
        this.state = {
            gameMode: 1,
            player1: {},
            player2: {},
            winner: null,
        };
    }
    selectGameMode = () => {
        // Circular assign of state
        this.setState({
            gameMode: this.state.gameMode === 3? 1 : this.state.gameMode + 1
        })
    };
    startGame = () => {
        let counter = 0;
        let interval = setInterval(() => {
            counter++;
            this.setState({
                player1: this.symbols[Math.floor(Math.random() * 3)],
                player2: this.symbols[Math.floor(Math.random() * 3)],
            });
            if (counter === 20) {
                clearInterval(interval);
                this.setState({winner: this.whoIsTheWinner()});
            }
        }, 100);
    };

    whoIsTheWinner = () => {
        const {player1, player2} = this.state;
        if ((player1 === player2) && player1 && player2) {
            return 'It\'s a draw!';
        }
        if ((player1 === 'rock' && player2 === 'scissors') || (player1 === 'scissors' && player2 === 'paper') ||
            (player1 === 'paper' && player2 === 'rock')) {
            return 'Payer1 wins!';
        }
        return 'Player2 wins!';
    };

    render() {
        const {gameMode, player1, player2, winner} = this.state;
        return (
            <div className="card mx-auto game-box-size">
                <div className="card-header">
                    <div className="mx-auto center-title">
                        Rock, Paper, Scissors
                    </div>
                </div>
                <div className="card-body">
                    <GameMode gameMode={gameMode} startGame={this.startGame} selectGameMode={this.selectGameMode}/>
                    <GameBoard player1={player1} player2={player2}/>
                    <p className="text-center">{winner}</p>
                </div>
                <div className="card-footer text-muted">
                    <UserPlays/>
                </div>
            </div>
        );
    }

}

export default RockPaperScissors;

import React, {Component} from 'react';
// Components
import GameMode from '../components/GameMode';
import GameBoard from '../components/GameBoard';
import UserPlays from '../components/UserPlays';

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
            player1: '',
            player2: '',
            winner: null,
        };
    }

    selectGameMode = () => {
        // Circular assign of state
        this.setState({
            gameMode: this.state.gameMode === 2 ? 1 : this.state.gameMode + 1,
            winner: null,
        });
    };
    startGame = (play = '') => {
        let counter = 0;
        let interval = setInterval(() => {
            counter++;
            this.setState({
                player1: this.symbols[Math.floor(Math.random() * 3)],
                player2: play !== '' ? play : this.symbols[Math.floor(Math.random() * 3)],
            });
            if (counter === 20) {
                clearInterval(interval);
                this.setState({winner: this.whoIsTheWinner()});
            }
        }, 70);
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
                    <strong><p className="text-center">{winner}</p></strong>
                </div>
                <div className={`card-footer text-muted ${gameMode === 1 ? 'grey-layer' : ''}`}>
                    <UserPlays gameMode={gameMode} startGame={this.startGame}/>
                </div>
            </div>
        );
    }

}

export default RockPaperScissors;

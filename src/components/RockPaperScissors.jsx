import React, {Component} from 'react';
// Components
import GameMode from './GameMode';
import GameBoard from './GameBoard';
import UserPlays from './UserPlays';

export class RockPaperScissors extends Component {

    render() {
        return (
            <div className="card mx-auto game-box-size">
                <div className="card-header">
                    <div className="mx-auto center-title">
                        Rock, Paper, Scissors
                    </div>
                </div>
                <div className="card-body">
                    <GameMode/>
                    <GameBoard player1={"player1"} player2={"player2"}/>
                </div>
                <div className="card-footer text-muted">
                    <UserPlays/>
                </div>
            </div>
        );
    }

}

export default RockPaperScissors;

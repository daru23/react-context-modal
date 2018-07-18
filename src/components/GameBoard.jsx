import React, {Component} from 'react';
// Components
import PlayOption from './PlayOption';

export class GameBoard extends Component {
    render () {

        const {player1, player2} = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    <div>
                        <PlayOption space={12} color={"#17a2b8"} />
                        <p className="text-center">{player1}</p>
                    </div>
                    <p className="text-center">vs</p>
                    <div>
                        <PlayOption space={12} color={"#17a2b8"}/>
                        <p className="text-center">{player2}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameBoard;
import React, {Component} from 'react';

export class GameMode extends Component {
    render () {
        const {gameMode, startGame, selectGameMode} = this.props;
        let gameModeText = 'Computer vs Computer';
        if (gameMode === 2 ) {
            gameModeText = 'Computer vs User';
        } else if (gameMode === 3) {
            gameModeText = 'User vs User';
        }
        return (
            <div className="">
                <div className="mx-auto text-center block-spacer">
                    <p className="text-center">{gameModeText}</p>

                    {gameMode === 1 && <button type="button" className="btn btn-info btn-sm btn-block"
                                               onClick={startGame}>Play</button>}

                    <button type="button" className="btn btn-light btn-sm btn-block"
                            onClick={selectGameMode}>Change Game Mode</button>
                </div>
            </div>
        )
    }
}

export default GameMode;
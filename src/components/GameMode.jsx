import React from 'react';
import PropTypes from 'prop-types';

export const GameMode = ({gameMode, startGame, selectGameMode}) => {
    let gameModeText = 'Computer vs Computer';
    if (gameMode === 2) {
        gameModeText = 'Computer vs User';
    } else if (gameMode === 3) {
        gameModeText = 'User vs User';
    }
    return (
        <div className="">
            <div className="mx-auto text-center block-spacer">
                <p className="text-center">{gameModeText}</p>
                {gameMode === 1 && <button type="button" className="btn btn-info btn-sm btn-block"
                                           onClick={() => startGame()}>Play</button>}
                <button type="button" className="btn btn-secondary btn-sm btn-block"
                        onClick={selectGameMode}>Change Game Mode
                </button>
            </div>
        </div>
    );
};

GameMode.propTypes = {
    gameMode: PropTypes.number.isRequired,
    startGame: PropTypes.func.isRequired,
    selectGameMode: PropTypes.func.isRequired,
};

export default GameMode;
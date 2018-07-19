import React from 'react';
import PropTypes from 'prop-types';
// Components
import PlayOption from './PlayOption';

export const GameBoard = ({player1, player2}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <PlayOption space={12} color={'#17a2b8'} play={player1} disabled={true} startGame={() => {}}/>
                    <p className="text-center">{'player1'}</p>
                </div>
                <p className="text-center">vs</p>
                <div>
                    <PlayOption space={12} color={'#17a2b8'} play={player2} disabled={true} startGame={() => {}}/>
                    <p className="text-center">{'player2'}</p>
                </div>
            </div>
        </div>
    );
};

GameBoard.propTypes = {
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired,
};

export default GameBoard;
import React from 'react';
import PropTypes from 'prop-types';
// Components
import PlayOption from './PlayOption';

export const UserPlays = ({gameMode, startGame}) => {
    let disabled = gameMode === 1;
    return (
        <div>
            <div className="">
                <p>Player 2</p>
            </div>
            <div className="row">
                <PlayOption space={4} play={'paper'} color={'#17a2b8'} disabled={disabled} startGame={startGame}/>
                <PlayOption space={4} play={'rock'} color={'#17a2b8'} disabled={disabled} startGame={startGame}/>
                <PlayOption space={4} play={'scissors'} color={'#17a2b8'} disabled={disabled} startGame={startGame}/>
            </div>
        </div>
    );
};

UserPlays.propTypes = {
    gameMode: PropTypes.number.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default UserPlays;
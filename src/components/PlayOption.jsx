import React from 'react';
import PropTypes from 'prop-types';
// Components
import HandPaper from './HandPaper';
import HandRock from './HandRock';
import HandScissors from './HandScissors';

export const PlayOption = ({play, color, space, disabled, startGame}) => {

    let icon = null;
    if (play === 'paper') {
        icon = <HandPaper/>;
    } else if (play === 'rock') {
        icon = <HandRock/>;
    } else if (play === 'scissors') {
        icon = <HandScissors/>;
    }

    return (
        <div className={`col-sm-${space}`}>
            <div className="card">
                <div className="card-body">
                    <div className={`mx-auto circle ${!disabled ? 'pointer' : '' }`} style={{backgroundColor: color}}
                         onClick={() => startGame(play)}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>);
};

PlayOption.propTypes = {
    play: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    space: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default PlayOption;
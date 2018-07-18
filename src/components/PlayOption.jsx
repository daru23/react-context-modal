import React from 'react';

// Components
import HandPaper from './HandPaper';
import HandRock from './HandRock';
import HandScissors from './HandScissors';

export const PlayOption = ({play, color, space}) => {

    let icon = null;
    if (play === 'paper') {
        icon = <HandPaper/>
    } else if (play === 'rock') {
        icon = <HandRock/>
    } else if (play === 'scissors'){
        icon = <HandScissors/>
    }

    return (
        <div className={`col-sm-${space}`}>
            <div className="card">
                <div className="card-body">
                    <div className="mx-auto circle" style={{backgroundColor: color}}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>)
};

export default PlayOption;
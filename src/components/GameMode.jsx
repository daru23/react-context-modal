import React, {Component} from 'react';

export class GameMode extends Component {
    render () {
        return (
            <div className="">
                <div className="mx-auto text-center block-spacer">
                    <p className="text-center">Computer vs Computer</p>
                    <button type="button" className="btn btn-info btn-sm btn-block">Play</button>
                </div>
            </div>
        )
    }
}

export default GameMode;
import React, {Component} from 'react';
import PlayOption from './PlayOption';


export class UserPlays extends Component {


    render () {
        return (
            <div className="row">
                <PlayOption space={4} play={"paper"} color={"grey"} />
                <PlayOption space={4} play={"rock"} color={"grey"}/>
                <PlayOption space={4}  play={"scissors"} color={"grey"}/>
            </div>
        )
    }
}

export default UserPlays;
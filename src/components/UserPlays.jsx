import React, {Component} from 'react';
import PlayOption from './PlayOption';


export class UserPlays extends Component {


    render () {
        return (
            <div className="row">
                <PlayOption space={4} play={"paper"} color={"#17a2b8"} />
                <PlayOption space={4} play={"rock"} color={"#17a2b8"}/>
                <PlayOption space={4}  play={"scissors"} color={"#17a2b8"}/>
            </div>
        )
    }
}

export default UserPlays;
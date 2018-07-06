import React from 'react';
// Components
import MouseTracker from './MouseTracker';
// Utils
import {toTitleCase} from '../utils/utils';
export const Card = () =>
    <div className="card border-light mb-3" style={{height: '300px'}}>
        <div className="card-body">
        <MouseTracker />
        </div>
    </div>;

export default Card;
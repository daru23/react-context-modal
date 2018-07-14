import React from 'react';
// Components
import MouseTracker from './MouseTracker';

export const Card = () =>
    <div className="card border-light mb-3">
        <div className="card-body">
        <MouseTracker />
        </div>
    </div>;

export default Card;
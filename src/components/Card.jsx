import React from 'react';
import PropTypes from 'prop-types';
// Components
import MouseTracker from './MouseTracker';

export const Card = ({title}) =>
    <div className="card border-light mb-3">
        <p className="paragraph">{title}</p>
        <div className="card-body">
        <MouseTracker />
        </div>
    </div>;

Card.propTypes = {
    title: PropTypes.string.isRequired
};

export default Card;
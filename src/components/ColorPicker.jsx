import React from 'react';
import PropTypes from 'prop-types';

export const ColorPicker = ({onChangeColor}) =>
    <div className="alert alert-light" role="alert">
        <button type="button" className="btn btn-dark btn-margin" onClick={() => {onChangeColor('black');}}>Black</button>
        <button type="button" className="btn btn-danger btn-margin" onClick={() => {onChangeColor('red');}}>Red </button>
        <button type="button" className="btn btn-success btn-margin" onClick={() => {onChangeColor('green');}}>Green</button>
        <button type="button" className="btn btn-primary btn-margin" onClick={() => {onChangeColor('blue');}}>Blue</button>
        <button type="button" className="btn btn-warning btn-margin" onClick={() => {onChangeColor('yellow');}}>Yellow</button>
    </div>;

ColorPicker.propTypes = {
    onChangeColor: PropTypes.func.isRequired
};

export default ColorPicker;
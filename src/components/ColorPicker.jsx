import React from 'react';
import PropTypes from 'prop-types';


export const ColorPicker = ({onChangeColor}) =>
    (<div className="colors">
        <div className="color black" onClick={() => {onChangeColor('black');}}></div>
        <div className="color red" onClick={() => {onChangeColor('red');}}></div>
        <div className="color green" onClick={() => {onChangeColor('green');}}></div>
        <div className="color blue" onClick={() => {onChangeColor('blue');}}></div>
        <div className="color yellow" onClick={() => {onChangeColor('yellow');}}></div>
    </div>);

ColorPicker.propTypes = {
    onChangeColor: PropTypes.func.isRequired
};

export default ColorPicker;
import React from 'react';
import {shallow} from 'enzyme';
import {GameBoard} from '../GameBoard';

describe('GameBoard Component', () => {

    const props = {
        player1: 'rock',
        player2: 'paper'
    };

    it('Should see PlayOption', () => {
        const wrapper = shallow(<GameBoard player1={props.player1} player2={props.player2}/>);
        expect(wrapper.find('PlayOption').exists()).toBe(true);
    })
});
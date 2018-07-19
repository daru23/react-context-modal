import React from 'react';
import {shallow} from 'enzyme';
import {UserPlays} from '../UserPlays';

describe('UserPlays Component', () => {
    const props = {
        gameMode: 2,
        startGame: () => {}
    };

    it('Should see Player 2', () => {
        const wrapper = shallow(<UserPlays {...props}/>);
        expect(wrapper.find('p').text()).toEqual('Player 2');
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import {HandRock} from '../HandRock';

describe('HandRock Component', () => {
    it('Should see HandRock', () => {
        const wrapper = shallow(<HandRock />);
        expect(wrapper.find('#hand-rock').exists()).toBe(true);
    })
});
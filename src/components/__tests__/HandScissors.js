import React from 'react';
import {shallow} from 'enzyme';
import {HandScissors} from '../HandScissors';

describe('HandScissors Component', () => {
    it('Should see HandScissors', () => {
        const wrapper = shallow(<HandScissors />);
        expect(wrapper.find('#hand-scissors').exists()).toBe(true);
    })
});
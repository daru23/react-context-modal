import React from 'react';
import {shallow} from 'enzyme';
import {MouseTracker} from '../MouseTracker';

describe('HandScissors Component', () => {
    it('Should see HandScissors', () => {
        const wrapper = shallow(<MouseTracker />);
        expect(wrapper.find('Mouse').exists()).toBe(true);
    })
});
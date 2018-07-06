import React from 'react';
import {shallow} from 'enzyme';
import {Icon} from '../Icon';

describe('Icon Component', () => {
    it('Should see svg element', () => {
        const wrapper = shallow(<Icon />);
        expect(wrapper.find('svg').exists()).toBe(true);
    });
    it('Should see circle elements', () => {
        const wrapper = shallow(<Icon />);
        expect(wrapper.find('circle').exists()).toBe(true);
    })
});
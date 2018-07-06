import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../Header';

describe('Header Component', () => {
    it('Should see nav', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('nav').exists()).toBe(true);
    });
    it('Should see navbar', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })
});
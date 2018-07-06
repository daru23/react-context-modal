import React from 'react';
import {shallow} from 'enzyme';
import {Body} from '../Body';

describe('App Component', () => {
    it('Should see app component', () => {
        const wrapper = shallow(<Body />);
        expect(wrapper.find('.card').exists()).toBe(true);
    })
});
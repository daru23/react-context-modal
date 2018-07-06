import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../App';

describe('App Component', () => {
   it('Should see app component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('#app-component').exists()).toBe(true);
   })
});
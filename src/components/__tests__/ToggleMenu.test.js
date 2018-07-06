import React from 'react';
import {shallow} from 'enzyme';
import {ToggleMenu} from '../ToggleMenu';

const setup = (propOverrides) => {
    const props = Object.assign({
        children: <div>Login</div>
    }, propOverrides);
    const wrapper = shallow(<ToggleMenu {...props} />);
    const initialState = wrapper.state();
    return {
        props,
        wrapper,
        initialState,
        dropdownClass: wrapper.find('.dropdown'),
        buttonElement: wrapper.find('button'),
    }
};

describe('CustomToggleMenu Component', () => {
    it('Should see dropdown class', () => {
        const{dropdownClass} = setup();
        expect(dropdownClass.exists()).toBe(true);
    });
    it('Should initial state', () => {
        const{initialState} = setup();
        expect(initialState.showMenu).toBe(false);
    });
    it('Should change state', () => {
        const{wrapper} = setup();
        wrapper.instance().toggleMenu();
        const newState = wrapper.state();
        expect(newState.showMenu).toBe(true);
    });
    it('Should render several children', () => {
        const {wrapper} = setup({children:[<div>Edit</div>, <div>Login</div>]});
        expect(wrapper.find('.dropdown-menu').exists()).toBe(true);
    });
});
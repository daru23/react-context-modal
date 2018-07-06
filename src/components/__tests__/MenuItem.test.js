import React from 'react';
import {shallow} from 'enzyme';
import {MenuItem} from '../MenuItem';

const setup = (propOverrides) => {
    const props = Object.assign({
       label: "Option"
    }, propOverrides);
    const wrapper = shallow(<MenuItem {...props} />);
    return {
        props,
        wrapper,
        aElement: wrapper.find('a'),
        styleClass: wrapper.find('.dropdown-item'),
    }
};

describe('MenuItem Component', () => {
    it('Should see a element', () => {
        const {aElement} = setup();
        expect(aElement.exists()).toBe(true);
    });
    it('Should see dropdown-item class', () => {
        const {styleClass} = setup();
        expect(styleClass.exists()).toBe(true);
    });
    it('Should see label text "Option"', () => {
        const {aElement} = setup();
        expect(aElement.text()).toEqual('Option');
    });
    it('Should see label text "Login"', () => {
        const {aElement} = setup({label: "Login"});
        expect(aElement.text()).toEqual('Login');
    })
});
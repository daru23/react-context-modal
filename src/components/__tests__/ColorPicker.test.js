import React from 'react';
import {shallow} from 'enzyme';
import {ColorPicker} from '../ColorPicker';

const setup = (propOverrides, findClass) => {
    const props = Object.assign({
        onChangeColor: () => {},
    }, propOverrides);
    const wrapper = shallow(<ColorPicker {...props} />);
    return {
        props,
        wrapper,
        styleClass: wrapper.find(findClass),
    }
};

describe('ColorPicker Component', () => {
    it('Should see alert class', () => {
        const {styleClass} = setup({}, '.alert-light');
        expect(styleClass.exists()).toBe(true);
    });
    it('Should see btn-dark class', () => {
        const {styleClass} = setup({}, '.btn-dark');
        expect(styleClass.exists()).toBe(true);
    });
    it('Should see btn-danger class', () => {
        const {styleClass} = setup({}, '.btn-danger');
        expect(styleClass.exists()).toBe(true);
    });
    it('Should see btn-success class', () => {
        const {styleClass} = setup({}, '.btn-success');
        expect(styleClass.exists()).toBe(true);
    });
    it('Should see btn-primary class', () => {
        const {styleClass} = setup({}, '.btn-primary');
        expect(styleClass.exists()).toBe(true);
    });
    it('Should see btn-warning class', () => {
        const {styleClass} = setup({}, '.btn-warning');
        expect(styleClass.exists()).toBe(true);
    });
    it('Should click .btn-dark button', () => {
        const {styleClass} = setup({}, '.btn-dark');
        styleClass.simulate('click', { preventDefault() {} });
    });
    it('Should click .btn-danger button', () => {
        const {styleClass} = setup({}, '.btn-danger');
        styleClass.simulate('click', { preventDefault() {} });
    });
    it('Should click .btn-success button', () => {
        const {styleClass} = setup({}, '.btn-success');
        styleClass.simulate('click', { preventDefault() {} });
    });
    it('Should click .btn-primary button', () => {
        const {styleClass} = setup({}, '.btn-primary');
        styleClass.simulate('click', { preventDefault() {} });
    });
    it('Should click .btn-warning button', () => {
        const {styleClass} = setup({}, '.btn-warning');
        styleClass.simulate('click', { preventDefault() {} });
    });
});
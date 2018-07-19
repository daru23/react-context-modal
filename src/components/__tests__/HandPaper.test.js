import React from 'react';
import {shallow} from 'enzyme';
import {HandPaper} from '../HandPaper';

describe('HandPaper Component', () => {
    it('Should see HandPaper', () => {
        const wrapper = shallow(<HandPaper />);
        expect(wrapper.find('#hand-paper').exists()).toBe(true);
    })
});
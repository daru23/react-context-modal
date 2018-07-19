import React from 'react';
import {shallow} from 'enzyme';
import {CursorIcon} from '../CursorIcon';

describe('Card Component', () => {

    const props = {
        mouse: {
            x: 0,
            y: 0
        },
    };

    it('Should see Icon', () => {
        const wrapper = shallow(<CursorIcon mouse={props.mouse}/>);
        expect(wrapper.find('#i-eye').exists()).toBe(true);
    })
});
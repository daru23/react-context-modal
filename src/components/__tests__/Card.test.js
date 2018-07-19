import React from 'react';
import {shallow} from 'enzyme';
import {Card} from '../Card';

describe('Card Component', () => {

    const props = {
        title: 'Some Title',
    };

    it('Should see Some Title', () => {
        const wrapper = shallow(<Card title={props.title}/>);
        expect(wrapper.find('p').text()).toEqual('Some Title');
    })
});
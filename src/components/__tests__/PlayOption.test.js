import React from 'react';
import {shallow} from 'enzyme';
import {PlayOption} from '../PlayOption';

describe('PlayOption Component', () => {

    const props = {
        play: 'rock',
        color: "white",
        space: 4,
        disabled: false,
        startGame: () => {},
    };

    it('Should see .col-sm-4', () => {
        const wrapper = shallow(<PlayOption {...props}/>);
        expect(wrapper.find('.col-sm-4').exists()).toBe(true);
    });
    it('Should see .pointer', () => {
        const wrapper = shallow(<PlayOption {...props}/>);
        expect(wrapper.find('.pointer').exists()).toBe(true);
    });
    it('Should not see .pointer', () => {
        const wrapper = shallow(<PlayOption play={props.play} color={props.color} space={4} disabled={true} startGame={props.startGame}/>);
        expect(wrapper.find('.pointer').exists()).toBe(false);
    });
    it('Should click in circle', () => {
        const wrapper = shallow(<PlayOption {...props}/>);
        wrapper.find('.circle').simulate('click', { preventDefault() {} });
    });
    it('Should see HandRock', () => {
        const wrapper = shallow(<PlayOption {...props}/>);
        expect(wrapper.find('HandRock').exists()).toBe(true);
    });
    it('Should not see HandPaper', () => {
        const wrapper = shallow(<PlayOption play={'paper'} color={props.color} space={4} disabled={true} startGame={props.startGame}/>);
        expect(wrapper.find('HandPaper').exists()).toBe(true);
    });
    it('Should not see HandScissors', () => {
        const wrapper = shallow(<PlayOption play={'scissors'} color={props.color} space={4} disabled={true} startGame={props.startGame}/>);
        expect(wrapper.find('HandScissors').exists()).toBe(true);
    });
});
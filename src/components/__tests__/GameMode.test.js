import React from 'react';
import {shallow} from 'enzyme';
import {GameMode} from '../GameMode';

describe('GameMode Component', () => {

    const props = {
        gameMode: 1,
        startGame: () => {},
        selectGameMode: () => {},
    };

    it('Should see #game-mode', () => {
        const wrapper = shallow(<GameMode {...props} />);
        expect(wrapper.find('#game-mode').exists()).toBe(true);
    });
    it('Should see Computer vs Computer', () => {
        const wrapper = shallow(<GameMode {...props} />);
        expect(wrapper.find('#game-mode-text').text()).toEqual('Computer vs Computer');
    });
    it('Should see Play button', () => {
        const wrapper = shallow(<GameMode {...props} />);
        expect(wrapper.find('.btn-info').text()).toEqual('Play');
    });
    //.simulate('click', { preventDefault() {} })
    it('Should click Play button', () => {
        const wrapper = shallow(<GameMode {...props} />);
        wrapper.find('.btn-info').simulate('click', { preventDefault() {} });
    });
    it('Should see Computer vs User', () => {
        const wrapper = shallow(<GameMode gameMode={2} startGame={props.startGame} selectGameMode={props.selectGameMode} />);
        expect(wrapper.find('#game-mode-text').text()).toEqual('Computer vs User');
    });
    it('Should see User vs User', () => {
        const wrapper = shallow(<GameMode gameMode={3} startGame={props.startGame} selectGameMode={props.selectGameMode} />);
        expect(wrapper.find('#game-mode-text').text()).toEqual('User vs User');
    })
});
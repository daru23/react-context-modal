import React, {Component, createContext} from 'react';

const RockPaperScissorsContext = createContext("light");

class RockPaperScissorsProvider extends Component {
    constructor() {
        super();
        this.state = {
            gameMode: 1,
            winner: null
        };
    }
    toggleTheme = () => {
        this.setState(({theme}) => ({
            theme: theme === 'light' ? 'dark' : 'light',
            opposite: theme === 'light' ? 'light' : 'dark',
        }))
    };
    render() {
        return (
            <RockPaperScissorsContext.Provider value={this.state}>
                {this.props.children({toggleTheme: this.toggleTheme})}
            </RockPaperScissorsContext.Provider>
        )
    }
}

const RockPaperScissorsConsumer = RockPaperScissorsContext.Consumer;

export {RockPaperScissorsProvider, RockPaperScissorsConsumer};
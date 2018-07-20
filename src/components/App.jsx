import React from 'react';
import {Route} from 'react-router-dom';
import {ThemeProvider, ThemeConsumer} from '../contexts/ThemeContext';
import Header from './Header';
import Body from './Body';
import RenderProps from './RenderProps';
import Whiteboard from '../containers/Whiteboard';
import RockPaperScissors from '../containers/RockPaperScissors';

export const App = () =>
    <ThemeProvider>
        {({toggleTheme}) => (
            <ThemeConsumer>
                {(state) => (
                    <div id="app-component">
                        <Header theme={state.theme} toggleTheme={toggleTheme}/>
                        <Route exact path="/" component={Body}/>
                        <Route exact path="/mouse-tracker" component={RenderProps}/>
                        <Route exact path="/whiteboard" component={Whiteboard}/>
                        <Route exact path="/rock-paper-scissors" component={RockPaperScissors}/>
                    </div>
                )}
            </ThemeConsumer>
        )}
    </ThemeProvider>;

export default App;
import React from 'react';
import {Route} from "react-router-dom";
import Header from './Header';
import Body from './Body';
import Whiteboard from '../containers/Whiteboard';
import RockPaperScissors from '../containers/RockPaperScissors';

export const App = () =>
    <div id="app-component">
        <Header/>
        <Route exact path="/" component={Body} />
        <Route exact path="/whiteboard" component={Whiteboard} />
        <Route exact path="/rock-paper-scissors" component={RockPaperScissors} />
    </div>;

export default App;
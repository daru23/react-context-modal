import React from 'react';
import { Route, Link } from "react-router-dom";
import Header from './Header';
import Body from './Body';
import Whiteboard from './Whiteboard';

export const App = () =>
    <div id="app-component">
        <Header/>
        <Route exact path="/" component={Body} />
        <Route exact path="/whiteboard" component={Whiteboard} />
    </div>;

export default App;
import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';

export class App extends Component {
    render() {
        return (<div id="app-component">
            <Header />
            <Body />
        </div>);
    }
}

export default App;
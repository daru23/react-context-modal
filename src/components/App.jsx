import React, {Component} from 'react';
import Header from './Header';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu});
    };

    render(){
        return (<div>
                    <Header showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
                    <div>
                        <h3>Body</h3>
                    </div>
                </div>)
    }
}


export default App;
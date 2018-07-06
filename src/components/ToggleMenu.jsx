import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Components
import MenuItem from './MenuItem';
import Icon from './Icon';

export class ToggleMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
    }

    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu});
    };

    render() {
        const {showMenu} = this.state;
        const {children} = this.props;
        let optionsList = (React.Children.count(children) > 1) ? children.map((x, i) => <MenuItem key={`toggle-menu-item-${i}`} label={x} />):
            <MenuItem key={`toggle-menu-item-${0}`} label={children}/>;
        return (<div className={`dropdown ${showMenu ? 'show' : ''}`}>
                    <button className="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleMenu}>
                       <Icon />
                    </button>
                    <div className={`dropdown-menu dropdown-menu-right ${showMenu ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                        {showMenu && optionsList}
                    </div>
        </div>);
    }
}

ToggleMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ToggleMenu;
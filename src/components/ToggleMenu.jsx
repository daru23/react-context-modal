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
    componentDidUpdate() {
        // Just add listener when the toggle menu is open and remove it when is close,
        // This way do not interfere with other components
        if (this.state.showMenu) {
            document.addEventListener('mousedown', this.handleClickOutside);
        } else {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    };
    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu});
    };
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };
    handleClickOutside = (event) => {
        event.preventDefault();
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            if (this.state.showMenu) {
                this.setState({showMenu: false})
            }
        }
    };
    handleChildren = () => {
        const {children} = this.props;
        if (React.Children.count(children) > 1) {
            return children.map((x, i) => <MenuItem key={`toggle-menu-item-${i}`} label={x} />)
        } else {
            return <MenuItem key={`toggle-menu-item-${0}`} label={children}/>;
        }
    };
    render() {
        const {showMenu} = this.state;
        const {theme} = this.props;
        let optionsList = this.handleChildren();

        return (<div ref={this.setWrapperRef}  className={`dropdown ${showMenu ? 'show' : ''}`}>
                    <button className={`btn btn-${theme === 'dark' ? 'dark': 'light' }`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleMenu}>
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
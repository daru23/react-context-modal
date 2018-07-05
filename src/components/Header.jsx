import React from 'react';
require('../../node_modules/octicons/build/build.css');
// Components
import ToggleMenu from './ToggleMenu';

const Header = ({}) =>
    <nav className="navbar navbar-dark bg-dark justify-content-end">
        <ToggleMenu>
            <div>Edit</div>
            <div>Logout</div>
        </ToggleMenu>
    </nav>;

export default Header;
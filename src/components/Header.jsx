import React from 'react';
// Components
import ToggleMenu from './ToggleMenu';

export const Header = ({}) =>
    <nav className="navbar navbar-dark bg-dark justify-content-end">
        <ToggleMenu>
            <div>Edit</div>
            <div>Logout</div>
        </ToggleMenu>
    </nav>;

export default Header;
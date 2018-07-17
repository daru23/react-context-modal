import React from 'react';
import {Link} from 'react-router-dom';
// Components
import ToggleMenu from './ToggleMenu';

export const Header = ({}) =>
    <nav className="navbar navbar-dark bg-dark justify-content-end">
        <Link className="navbar-brand" to="/">React Examples</Link>
        <Link className="navbar-brand" to="/whiteboard/">Whiteboard</Link>
        <ToggleMenu>
            <div>Edit</div>
            <div>Logout</div>
        </ToggleMenu>
    </nav>;

export default Header;
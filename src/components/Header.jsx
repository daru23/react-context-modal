import React from 'react';
import {Link} from 'react-router-dom';
// Components
import ToggleMenu from './ToggleMenu';

export const Header = ({}) =>
    <nav className="navbar navbar-dark bg-dark justify-content-end">
        <div className="container">
            <div className="row">
                <div className="col-8"><Link className="navbar-brand" to="/">React Examples</Link></div>
                <div className="col-4"><Link className="navbar-brand" to="/whiteboard/">Whiteboard</Link></div>
            </div>
        </div>
        <ToggleMenu>
            <div>Edit</div>
            <div>Logout</div>
        </ToggleMenu>
    </nav>;

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
// Components
import ToggleMenu from './ToggleMenu';

export const Header = ({}) =>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">React Portafolio</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="/mouse-tracker/">Mouse Tracker</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/whiteboard/">Whiteboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/rock-paper-scissors/">Rock Paper Scissors</Link></li>
            </ul>
        </div>
        <ToggleMenu>
            <div>Edit</div>
            <div>Logout</div>
        </ToggleMenu>
    </nav>;

export default Header;
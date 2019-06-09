import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>My News App</div>
            <Link to="/form" className="btn btn-info">Form</Link>
        </header>
    )
}

export default Header;
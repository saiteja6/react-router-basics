import React from 'react';

const Header = () => {
    return(
        <ul className="navigation-menu">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    );
};

export default Header;
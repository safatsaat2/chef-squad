import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="navbar bg-orange-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Chef Squad</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to={'/'}><li className='text-primary-500'><a>Home</a></li></Link>
                    <Link to={'/blog'}><li><a>Blog</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/login'}><a className="btn mr-3">Sign in</a>
                </Link>
                <a className="btn">Register</a>
            </div>
        </div>
    );
};

export default Header;
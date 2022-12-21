import React from 'react';
import logo from '../../images/Logo.svg'
import CSS from './Header.css'
const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/shop">Shop</a>
                <a href="/inventory">Inventory</a>
                <a href="/order summery">Order Summery</a>
            </div>
        </nav>
    );
};

export default Header;
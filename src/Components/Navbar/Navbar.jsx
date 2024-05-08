import React, { useContext, useRef, useState } from 'react';
import { ShopContext } from '~/Context/ShopContext';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import config from '~/config';
import logo from '../Assets/logo.png';
import cart_icon from '~/Components/Assets/cart_icon.png';
import dropdown_icon from '~/Components/Assets/nav-dropdown.png';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className="nav-dropdown" src={dropdown_icon} onClick={dropdownToggle} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu('shop')}>
                    <Link to={config.routes.home}>Shop</Link>
                    {menu === 'shop' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('mens')}>
                    <Link to={config.routes.mens}>Men</Link>
                    {menu === 'mens' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('womens')}>
                    <Link to={config.routes.womens}>Women</Link>
                    {menu === 'womens' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('kids')}>
                    <Link to={config.routes.kids}>Kids</Link>
                    {menu === 'kids' ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to={config.routes.login}>
                    <button>Login</button>
                </Link>
                <Link to={config.routes.cart}>
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;

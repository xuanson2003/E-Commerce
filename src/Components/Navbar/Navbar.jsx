import React, { useContext, useState } from 'react';
import './Navbar.scss';
import logo from '../Assets/logo.png';
import cart_icon from '~/Components/Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import config from '~/config';
import { ShopContext } from '~/Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
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

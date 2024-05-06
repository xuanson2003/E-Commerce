import config from '~/config';

import Shop from '~/Pages/Shop';
import ShopCategory from '~/Pages/ShopCategory';
import Product from '~/Pages/Product';
import Cart from '~/Pages/Cart';
import LoginSignup from '~/Pages/LoginSignup';

const publicRoutes = [
    { path: config.routes.home, component: <Shop /> },
    { path: config.routes.mens, component: <ShopCategory category="men" /> },
    { path: config.routes.womens, component: <ShopCategory category="women" /> },
    { path: config.routes.kids, component: <ShopCategory category="kid" /> },
    { path: config.routes.products, component: <Product /> },
    { path: config.routes.product, component: <Product /> },
    { path: config.routes.cart, component: <Cart /> },
    { path: config.routes.login, component: <LoginSignup /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

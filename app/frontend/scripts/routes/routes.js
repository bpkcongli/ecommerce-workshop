import Cart from '../presentations/pages/cart';
import Home from '../presentations/pages/home';
import ProductDetail from '../presentations/pages/product-detail';

const Routes = {
  '/': Home,
  '/home': Home,
  '/detail-produk/:id': ProductDetail,
  '/keranjang': Cart,
};

export default Routes;

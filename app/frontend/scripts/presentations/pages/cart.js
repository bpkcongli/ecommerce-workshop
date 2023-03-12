import CartRepo from '../../repositories/CartRepo';
import CartDetail from '../components/CartDetail';
import CartSummary from '../components/CartSummary';

const Cart = {
  async render() {
    return `
      <div class="app-cart">
        <h2>Your Cart</h2>
        <div class="app-cart__content">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const cartContainer = document.querySelector('.app-cart__content');
    const {
      items,
      subtotal,
      tax,
      deliveryFee,
      total,
    } = await CartRepo.getCartDetail();
    const cartDetail = CartDetail(items);
    const cartSummary = CartSummary({
      subtotal,
      tax,
      deliveryFee,
      total,
    });

    cartContainer.innerHTML += await cartDetail.render();
    cartContainer.innerHTML += await cartSummary.render();
  },
};

export default Cart;

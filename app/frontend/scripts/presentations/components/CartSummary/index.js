import Button from '../Button';
import './index.css';

const CartSummary = ({
  subtotal,
  tax,
  deliveryFee,
  total,
}) => ({
  async render() {
    const checkoutButton = Button({ model: 'primary', label: 'Checkout Now' });

    return `
      <div class="cart-summary">
        <div class="cart-summary__top">
          <h3>Order Summary</h3>
          <div class="summary-entry cart-summary__subtotal">
            <span class="summary-entry__label">Sub Total</span>
            <span class="summary-entry__value">$${subtotal}</span>
          </div>
          <div class="summary-entry cart-summary__tax">
            <span class="summary-entry__label">Tax</span>
            <span class="summary-entry__value">$${tax}</span>
          </div>
          <div class="summary-entry cart-summary__delivery-fee">
            <span class="summary-entry__label">Delivery Fee</span>
            <span class="summary-entry__value">$${deliveryFee}</span>
          </div>
          <hr />
          <div class="summary-entry cart-summary__total">
            <span class="summary-entry__label">Total</span>
            <span class="summary-entry__value">$${total}</span>
          </div>
        </div>
        ${await checkoutButton.render()}
      </div>
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default CartSummary;

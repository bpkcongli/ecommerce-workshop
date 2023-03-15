import QuantitySelector from '../QuantitySelector';
import './index.css';

const CartDetail = (items) => ({
  async render() {
    const tableBody = await Promise.all(
      items.map(async ({
        name,
        imageUrl,
        price,
        quantity,
        total,
        stock,
      }) => {
        const quantitySelector = QuantitySelector(quantity, stock);

        return `
          <tr>
            <td>
              <div class="cart-product">
                <img alt="${name}" src="${imageUrl}">
                <div class="cart-product__overview">
                  <div class="cart-product__name">${name}</div>
                  <div class="cart-product__price">$${price}</div>
                </div>
              </div>
            </td>
            <td>
              ${await quantitySelector.render()}
            </td>
            <td>
              <div class="cart-product__total">$${total}</div>
            </td>
            <td class="cart-product__remove-btn">
              <button type="button">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
      }),
    );

    return `
      <div class="cart-detail">
      ${items.length !== 0 ? `
        <div class="cart-detail__inner">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${tableBody.join('')}
            </tbody>
          </table>
        </div>
      ` : `
        <div class="cart-detail__inner cart-detail__inner--empty">
          <p>Belum ada produk di keranjang Anda.</p>
        </div>
      `}  
      </div>
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default CartDetail;

import './index.css';
import IconButton from '../IconButton';

const ProductCard = ({
  id,
  name,
  imageUrl,
  price,
}) => ({
  render() {
    const addToWishlistButton = IconButton({
      model: 'secondary',
      iconName: 'far fa-heart',
      className: 'product-card__wishlist-btn',
    });

    const addToCartButton = IconButton({
      model: 'primary',
      iconName: 'fas fa-cart-shopping',
      className: 'product-card__cart-btn',
    });

    return `
      <div class="product-card">
        <div class="product-card__image">
          <img alt="${name}" src="${imageUrl}" />
          ${addToWishlistButton.render()}
          ${addToCartButton.render()}
        </div>
        <div class="product-card__overview">
          <a href="#/detail-produk/${id}" class="product-card__name">${name}</a>
          <span class="product-card__price">$${price}</span>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default ProductCard;

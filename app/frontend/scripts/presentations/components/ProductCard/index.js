import Swal from 'sweetalert2';
import './index.css';
import IconButton from '../IconButton';
import generateUniqueId from '../../../helpers/generateUniqueId';
import ProductRepo from '../../../repositories/ProductRepo';

const ProductCard = ({
  id,
  name,
  imageUrl,
  price,
  stock,
}) => ({
  _addToCartButton: IconButton({
    model: 'primary',
    iconName: 'fas fa-cart-shopping',
    className: 'product-card__cart-btn',
    disabled: stock === 0,
  }),

  _addToWishlistButton: IconButton({
    model: 'secondary',
    iconName: 'far fa-heart',
    className: 'product-card__wishlist-btn',
  }),

  _id: generateUniqueId(),

  async render() {
    return `
      <div class="product-card" id="productCard${this._id}">
        <div class="product-card__image">
          <img alt="${name}" src="${imageUrl}" />
          ${await this._addToWishlistButton.render()}
          ${await this._addToCartButton.render()}
        </div>
        <div class="product-card__overview">
          ${stock > 0 ? '' : '<span class="product-card__empty-stock">Stok habis</span>'}
          <a href="#/detail-produk/${id}" class="product-card__name">${name}</a>
          <span class="product-card__price">$${price}</span>
        </div>
      </div>
    `;
  },

  async afterRender() {
    await this._addToCartButton.afterRender();
    const addToCartButton = document.querySelector(`#productCard${this._id} .product-card__cart-btn`);

    const onClickAddToCartButtonHandler = async () => {
      const addToCartResult = await ProductRepo.addToCart({ id, quantity: 1 });
      if (!addToCartResult.error) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Produk berhasil ditambahkan ke keranjang Anda.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: `Produk gagal ditambahkan ke keranjang Anda. Error: ${addToCartResult.message}`,
        });
      }
    };

    addToCartButton.addEventListener('click', onClickAddToCartButtonHandler);
  },
});

export default ProductCard;

import Swal from 'sweetalert2';
import './index.css';
import Button from '../Button';
import ProductPerformance from '../ProductPerformance';
import ProductTag from '../ProductTag';
import QuantitySelector from '../QuantitySelector';
import generateUniqueId from '../../../helpers/generateUniqueId';
import productCategoryMapper from '../../../helpers/productCategoryMapper';
import ProductRepo from '../../../repositories/ProductRepo';

const ProductDetail = ({
  id,
  name,
  description,
  imageUrl,
  price,
  tags,
  rating,
  totalReviews,
  stock,
}) => ({
  _id: generateUniqueId(),

  _quantitySelector: QuantitySelector(0, stock),

  _buyNowButton: Button({
    model: 'primary',
    label: 'Buy Now',
    className: 'product-detail__buy-now-btn',
    disabled: stock === 0,
  }),

  _addToCartButton: Button({
    model: 'secondary',
    label: 'Add to Cart',
    className: 'product-detail__add-to-cart-btn',
    disabled: stock === 0,
  }),

  async render() {
    const productTags = await Promise.all(
      tags.map(async (tag) => ProductTag(productCategoryMapper[tag]).render()),
    );

    const productPerformance = ProductPerformance({ rating, totalReviews });

    return `
      <section class="product-detail" id="productDetail${this._id}">
        <div class="product-detail__left">
          <img alt="${name}" src="${imageUrl}" />
        </div>
        <div class="product-detail__right">
          <div class="product-detail__overview">
            <div class="product-detail__tags">${productTags.join('')}</div>
            <div class="product-detail__name">${name}</div>
            <div class="product-detail__price">$${price}</div>
            <p class="product-detail__description">${description}</p>
            ${await productPerformance.render()}
          </div>
          <div class="product-detail__interaction">
            ${stock !== 0 ? `
              <div class="product-detail__stock">Stock: ${stock}</div>
            ` : `
              <div class="product-detail__stock product-detail__stock--empty">
                Sold out!
              </div>
            `}
            ${await this._quantitySelector.render()}
            <div class="product-detail__action-buttons">
              ${await this._buyNowButton.render()}
              ${await this._addToCartButton.render()}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    await this._quantitySelector.afterRender();
    const addToCartButton = document.querySelector(`#productDetail${this._id} .product-detail__add-to-cart-btn`);
    const buyNowButton = document.querySelector(`#productDetail${this._id} .product-detail__buy-now-btn`);
    const quantityInput = document.querySelector(`#productDetail${this._id} .quantity-selector input`);

    const submitAddToCart = async (quantity) => {
      const addToCartResult = await ProductRepo.addToCart({ id, quantity });
      if (!addToCartResult.error) {
        await Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Produk berhasil ditambahkan ke keranjang Anda.',
        });
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: `Produk gagal ditambahkan ke keranjang Anda. Error: ${addToCartResult.message}`,
        });
      }

      return !addToCartResult.error;
    };

    const onClickAddToCartButtonHandler = async () => {
      const quantity = Number(quantityInput.value);
      if (quantity < 1) return;
      await submitAddToCart(quantity);
    };

    const onClickBuyNowButtonHandler = async () => {
      const quantity = Number(quantityInput.value);
      if (quantity < 1) return;
      const submitAddToCartResult = await submitAddToCart(quantity);

      if (submitAddToCartResult) window.location.assign('/#/keranjang');
    };

    addToCartButton.addEventListener('click', onClickAddToCartButtonHandler);
    buyNowButton.addEventListener('click', onClickBuyNowButtonHandler);
  },
});

export default ProductDetail;

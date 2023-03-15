import Button from '../Button';
import ProductPerformance from '../ProductPerformance';
import ProductTag from '../ProductTag';
import QuantitySelector from '../QuantitySelector';
import productCategoryMapper from '../../../helpers/productCategoryMapper';
import './index.css';

const ProductDetail = ({
  name,
  description,
  imageUrl,
  price,
  tags,
  rating,
  totalReviews,
  stock,
}) => ({
  quantitySelector: QuantitySelector(0, stock),

  async render() {
    const productTags = await Promise.all(
      tags.map(async (tag) => ProductTag(productCategoryMapper[tag]).render()),
    );

    const productPerformance = ProductPerformance({ rating, totalReviews });

    const buyNowButton = Button({
      model: 'primary',
      label: 'Buy Now',
      className: 'product-detail__buy-now-btn',
    });

    const addToCart = Button({
      model: 'secondary',
      label: 'Add to Cart',
      className: 'product-detail__add-to-cart-btn',
    });

    return `
      <section class="product-detail">
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
            <div class="product-detail__stock">Stock: ${stock}</div>
            ${await this.quantitySelector.render()}
            <div class="product-detail__action-buttons">
              ${await buyNowButton.render()}
              ${await addToCart.render()}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    await this.quantitySelector.afterRender();
  },
});

export default ProductDetail;

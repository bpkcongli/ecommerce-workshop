import ProductCard from '../ProductCard';
import ProductRepo from '../../../repositories/ProductRepo';
import './index.css';

const ProductList = (tagName) => ({
  _productCards: [],

  async render() {
    const products = await ProductRepo.getAllProducts(tagName);
    const productListContent = await Promise.all(
      products.map(async ({
        id,
        name,
        imageUrl,
        price,
        stock,
      }) => {
        const productCard = ProductCard({
          id,
          name,
          imageUrl,
          price,
          stock,
        });

        this._productCards.push(productCard);
        return productCard.render();
      }),
    );

    return `
      <div class="product-list">
        ${productListContent.join('')}
      </div>
    `;
  },

  async afterRender() {
    await Promise.all(this._productCards.map(async (productCard) => productCard.afterRender()));
  },
});

export default ProductList;

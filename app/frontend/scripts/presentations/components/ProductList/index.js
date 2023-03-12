import ProductCard from '../ProductCard';
import ProductRepo from '../../../repositories/ProductRepo';
import './index.css';

const ProductList = (tagName) => ({
  async render() {
    let productListContent = '';

    const products = await ProductRepo.getAllProducts(tagName);
    products.forEach(async ({
      id,
      name,
      imageUrl,
      price,
    }) => {
      productListContent += ProductCard({
        id,
        name,
        imageUrl,
        price,
      }).render();
    });

    return `
      <div class="product-list">
        ${productListContent}
      </div>
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default ProductList;

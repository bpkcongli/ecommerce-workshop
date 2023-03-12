import './index.css';

const ProductTag = (tagName) => ({
  async render() {
    return `
      <div class="product-tag">${tagName}</div>
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default ProductTag;

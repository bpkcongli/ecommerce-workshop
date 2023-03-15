import UrlParser from '../../helpers/url-parser';
import ProductRepo from '../../repositories/ProductRepo';
import ProductDetail from '../components/ProductDetail';
import ProductList from '../components/ProductList';
import ProductTag from '../components/ProductTag';

const ProductDetailPage = {
  async render() {
    return `
      <div class="app-product-detail">
      </div>
    `;
  },

  async afterRender() {
    const { id: productId } = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await ProductRepo.getSpecificProductById(productId);

    const productDetailContainer = document.querySelector('.app-product-detail');
    const productDetail = ProductDetail({ ...product });

    productDetailContainer.innerHTML += await productDetail.render();

    const similarProductTag = ProductTag('Similar Products');
    const similarProductList = ProductList(product.tags);

    productDetailContainer.innerHTML += `
      <div class="product-catalog">
        ${await similarProductTag.render()}
        ${await similarProductList.render()}
      </div>
    `;

    await productDetail.afterRender();
  },
};

export default ProductDetailPage;

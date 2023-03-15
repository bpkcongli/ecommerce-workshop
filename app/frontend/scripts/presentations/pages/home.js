import ProductRepo from '../../repositories/ProductRepo';
import ProductList from '../components/ProductList';
import ProductTag from '../components/ProductTag';

const Home = {
  async render() {
    return `
      <div class="app-home">
        <div class="app-jumbotron">
          <h2 class="app-jumbotron__text">
            Brand New Furniture in Your House. Now!
          </h2>
        </div>
        <div class="app-catalog">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.app-catalog');
    const productTags = await ProductRepo.getAllProductTags();
    const productCatalogs = await Promise.all(
      productTags.map(async (productTag) => {
        const productList = ProductList([productTag.name]);
        return `
          <div class="product-catalog">
            ${await ProductTag(productTag.label).render()}
            ${await productList.render()}
          </div>
        `;
      }),
    );

    container.innerHTML += productCatalogs.join('');
  },
};

export default Home;

import CONFIG from '../commons/config';

const ProductRepo = {
  getAllProductTags: async () => {
    const response = await fetch(`${CONFIG.API_BASEURL}/product-tags`);
    const responseJSON = await response.json();
    return responseJSON;
  },

  getAllProducts: async (tags) => {
    let url = `${CONFIG.API_BASEURL}/products`;
    if (tags.length > 0) {
      url += `?tags=${tags.join(',')}`;
    }

    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  },

  getSpecificProductById: async (productId) => {
    const response = await fetch(`${CONFIG.API_BASEURL}/products/${productId}`);
    const responseJSON = await response.json();
    return responseJSON;
  },
};

export default ProductRepo;

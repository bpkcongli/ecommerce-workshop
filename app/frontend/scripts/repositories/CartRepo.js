import CONFIG from '../commons/config';

const CartRepo = {
  getCartDetail: async () => {
    const response = await fetch(`${CONFIG.API_BASEURL}/carts`);
    const responseJSON = await response.json();
    return responseJSON;
  },
};

export default CartRepo;

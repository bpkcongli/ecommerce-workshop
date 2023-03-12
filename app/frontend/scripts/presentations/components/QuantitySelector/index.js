import './index.css';

const QuantitySelector = (stock) => ({
  async render() {
    return `
      <div class="quantity-selector">
        <button type="button" class="quantity-selector__decrement">
          <i class="fas fa-minus"></i>
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="\\d{1}"
          min="0"
          max="${stock}"
          value="0"
        />
        <button type="button" class="quantity-selector__increment">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    `;
  },

  async afterRender() {
    const decrementBtn = document.querySelector('quantity-selector__decrement');
    // const input = document.querySelector('.quantity-selector input');
    const incrementBtn = document.querySelector('quantity-selector__increment');

    const onClickDecrementQuantityHandler = () => {
      console.log('decrement');
    };

    const onClickIncrementQuantityHandler = () => {
      console.log('increment');
    };

    decrementBtn.addEventListener('click', onClickDecrementQuantityHandler);
    incrementBtn.addEventListener('click', onClickIncrementQuantityHandler);
  },
});

export default QuantitySelector;

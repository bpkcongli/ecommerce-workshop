import './index.css';

const QuantitySelector = (currentQuantity, stock) => ({
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
          value="${currentQuantity}"
          disabled
        />
        <button type="button" class="quantity-selector__increment">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    `;
  },

  async afterRender() {
    const decrementBtn = document.querySelector('.quantity-selector__decrement');
    const input = document.querySelector('.quantity-selector input');
    const incrementBtn = document.querySelector('.quantity-selector__increment');

    const onClickDecrementQuantityHandler = () => {
      const updatedValue = Number(input.value) - 1;
      if (updatedValue < 0) return;
      input.value = String(updatedValue);
    };

    const onClickIncrementQuantityHandler = () => {
      const updatedValue = Number(input.value) + 1;
      if (updatedValue > stock) return;
      input.value = String(updatedValue);
    };

    decrementBtn.addEventListener('click', onClickDecrementQuantityHandler);
    incrementBtn.addEventListener('click', onClickIncrementQuantityHandler);
  },
});

export default QuantitySelector;

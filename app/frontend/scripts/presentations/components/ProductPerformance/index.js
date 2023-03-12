import './index.css';

const ProductPerformance = ({ rating, totalReviews }) => ({
  async render() {
    let stars = '';
    const totalFullStars = Math.floor(rating);
    for (let i = 0; i < totalFullStars;) {
      stars += '<i class="fas fa-star"></i>';
      i += 1;
    }

    const ratingRemainder = rating - totalFullStars;
    if (ratingRemainder < 0.3) {
      stars += '';
    } else if (ratingRemainder < 0.7) {
      stars += '<i class="fas fa-star-half"></i>';
    } else {
      stars += '<i class="fas fa-star"></i>';
    }

    return `
      <div class="product-performance">
        <div class="product-rating">
          <span>${rating}</span>
          <div class="product-rating__stars">${stars}</div>
        </div>
        <span class="product-total-reviews">${totalReviews} reviews</span>
      </div>
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default ProductPerformance;

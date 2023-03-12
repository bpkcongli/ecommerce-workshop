import './index.css';

const Button = ({ model, label, className }) => ({
  async render() {
    const classVariant = `button button--${model} ${className}`.trim();

    return `
      <button type="button" class="${classVariant}">
        ${label}
      </button>
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default Button;

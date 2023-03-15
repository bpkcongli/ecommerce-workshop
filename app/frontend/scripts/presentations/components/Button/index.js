import './index.css';

const Button = ({
  model,
  label,
  className,
  disabled,
}) => ({
  async render() {
    const classVariant = `button button--${model} ${className}`.trim();

    return `
      ${!disabled ? `
        <button type="button" class="${classVariant}">
          ${label}
        </button>
      ` : `
        <button type="button" class="${classVariant}" disabled>
          ${label}
        </button>
      `}
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default Button;

import './index.css';

const IconButton = ({
  model,
  iconName,
  className,
  disabled,
}) => ({
  async render() {
    const classVariant = `icon-button icon-button--${model} ${className}`.trim();

    return `
      ${!disabled ? `
        <button type="button" class="${classVariant}">
          <i class="${iconName}"></i>
        </button>
      ` : `
        <button type="button" class="${classVariant}" disabled>
          <i class="${iconName}"></i>
        </button>
      `}
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default IconButton;

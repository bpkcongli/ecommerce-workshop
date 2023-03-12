import './index.css';

const IconButton = ({ model, iconName, className }) => ({
  render() {
    const classVariant = `icon-button icon-button--${model} ${className}`.trim();

    return `
      <button type="button" class="${classVariant}">
        <i class="${iconName}"></i>
      </button>
    `;
  },

  async afterRender() {
    // TODO: call after render
  },
});

export default IconButton;

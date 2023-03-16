import 'regenerator-runtime';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import App from './presentations/app';
import '../styles/main.css';

const app = new App({
  content: document.querySelector('#mainContent'),
});

const initiateApp = async () => {
  await app.renderPage();
};

window.addEventListener('hashchange', initiateApp);
window.addEventListener('load', initiateApp);

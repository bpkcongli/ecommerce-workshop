import UrlParser from '../helpers/url-parser';
import Routes from '../routes/routes';

class App {
  constructor({ content }) {
    this.__content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    this.__content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;

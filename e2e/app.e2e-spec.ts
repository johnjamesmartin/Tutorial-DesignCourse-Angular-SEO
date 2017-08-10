import { Ang4SeoPage } from './app.po';

describe('ang4-seo App', () => {
  let page: Ang4SeoPage;

  beforeEach(() => {
    page = new Ang4SeoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

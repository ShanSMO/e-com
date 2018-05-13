import { EComFePage } from './app.po';

describe('e-com-fe App', function() {
  let page: EComFePage;

  beforeEach(() => {
    page = new EComFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

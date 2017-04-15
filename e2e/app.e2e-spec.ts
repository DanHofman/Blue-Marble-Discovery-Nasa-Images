import { BlueMarblePage } from './app.po';

describe('blue-marble App', () => {
  let page: BlueMarblePage;

  beforeEach(() => {
    page = new BlueMarblePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('BM works!');
  });
});

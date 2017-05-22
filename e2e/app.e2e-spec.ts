import { AngularPipesDemoPage } from './app.po';

describe('angular-pipes-demo App', () => {
  let page: AngularPipesDemoPage;

  beforeEach(() => {
    page = new AngularPipesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

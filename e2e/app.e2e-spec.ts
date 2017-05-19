import { RejectionAppPage } from './app.po';

describe('rejection-app App', () => {
  let page: RejectionAppPage;

  beforeEach(() => {
    page = new RejectionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

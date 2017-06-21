import { AngMaxmAppPage } from './app.po';

describe('ang-maxm-app App', () => {
  let page: AngMaxmAppPage;

  beforeEach(() => {
    page = new AngMaxmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

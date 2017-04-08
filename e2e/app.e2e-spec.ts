import { MyAngularCliAppPage } from './app.po';

describe('my-angular-cli-app App', () => {
  let page: MyAngularCliAppPage;

  beforeEach(() => {
    page = new MyAngularCliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { MiAppAngularProyectoPage } from './app.po';

describe('mi-app-angular-proyecto App', function() {
  let page: MiAppAngularProyectoPage;

  beforeEach(() => {
    page = new MiAppAngularProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

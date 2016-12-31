import { BpcsAngRouteIssuePage } from './app.po';

describe('bpcs-ang-route-issue App', function() {
  let page: BpcsAngRouteIssuePage;

  beforeEach(() => {
    page = new BpcsAngRouteIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

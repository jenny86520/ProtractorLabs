import { browser, logging, $, $$, by, element, ExpectedConditions as EC } from 'protractor';
// 測試情境(名稱, callback function)
describe('App', () => {

  const url = 'http://www.protractortest.org';

  beforeEach(async () => {
    await browser.waitForAngularEnabled(true);
  });
  // 測試案例(名稱, callback function)
  it('should show title', async () => {
    await browser.get(url);
    const title = await browser.getTitle();
    // 預期結果
    expect(title).toContain('Protractor - end-to-end testing for AngularJS');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(
    //   jasmine.objectContaining({
    //     level: logging.Level.SEVERE
    //   } as logging.Entry)
    // );
  });
});

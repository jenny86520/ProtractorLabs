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

/** [start] 使用保哥的 snippets 練習 Jasmine 基本 API 撰寫 (describe, it, expect, toBe, toContain)
 * it: 一般
 * fit: 僅執行其(可複選)
 * xit: 僅不執行其(可複選)
*/
describe('Class-1116: App', () => {
  const url = 'http://www.protractortest.org';

  it('should show title', async () => {
    await browser.get(url);
    const title = await browser.getTitle();
    expect(title).toContain('Protractor - end-to-end testing for AngularJS');
  });

  it('should open', async () => {
    await browser.get(url);
    const real_url = await browser.getCurrentUrl();
    expect(real_url).toContain('http://www.protractortest.org');
  });
});
/** [end] 使用保哥的 snippets 練習 Jasmine 基本 API 撰寫 (describe, it, expect, toBe, toContain) */

/** [start] 測試 Vuejs.org 搜尋 ssr 的結果包含 Server-side Rendering 字樣 */
describe('Class-1116: try to goto vue.js website to search ssr and show something', () => {
  const url = 'https://vuejs.org/';
  // 開啟 vue.js website
  it('should open vue.js website', async () => {
    await browser.waitForAngularEnabled(false); // Solve Failed: Angular could not be found on the page https://vuejs.org/.
                                                // If this is not an Angular application, you may need to turn off waiting for Angular.
    await browser.get(url);
    const real_url = await browser.getCurrentUrl();
    expect(real_url).toBe(url);
  });
  // 於搜尋框輸入'ssr'，並顯示相關訊息(Server-Side Rendering)
  it('should search ssr and show something', async () => {
    await element(by.id('search-query-nav')).sendKeys('ssr');
    await browser.sleep(3000); // 等待3秒
    const searchSet = await element(by.className('aa-dataset-1')).getText();
    expect(searchSet).toContain('Server-Side Rendering');
  });
});
/** [end] 測試 Vuejs.org 搜尋 ssr 的結果包含 Server-side Rendering 字樣 */

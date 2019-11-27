import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
/** [start] 實戰演練：練習複雜 DOM 定位運用 */
describe('Class-1116: search Angular and goto [Angular 實戰開發] page', () => {
    // 搜尋 Angular 顯示查詢結果頁
    it('should open search block', async () => {
        await browser.get('/');
        element(by.name('searchTerm')).sendKeys('Angular');
        await element(by.buttonText('搜尋')).click();
        const searchBlock = await element(by.className('modal-dialog')).isPresent();
        expect(searchBlock).toBeTruthy();
    });
    // 查詢結果頁顯示三個查詢結果
    it('should search block show 3 item', async () => {
        const count = await element.all(by.className('list-group-item')).count();
        expect(count).toEqual(3);
    });
    // 點選[Angular 實戰開發]，並進入[ANGULAR 7 開發實戰：新手入門篇]頁面
    it('should click [Angular 實戰開發] to goto [ANGULAR 7 開發實戰：新手入門篇] page', async () => {
      const searchResults = element(by.id('searchResults'));
      await searchResults.element(by.linkText('Angular 實戰開發')).click();
      const title = await element(by.tagName('h2')).getText();
      expect(title).toContain('ANGULAR 7 開發實戰：新手入門篇');
    });

  });
/** [end] 實戰演練：練習複雜 DOM 定位運用 */


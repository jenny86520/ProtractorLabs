import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
/** [start] 實戰演練：練習 window 彈出視窗操作 */
describe('Class-1130: leave add new event page', () => {
    const url = 'http://localhost:4200/events/new';
    // 開啟 建立活動 頁面
    it('should open create event page', async () => {
        await browser.get(url);
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toContain(url);
    });
    //
    it('should leave by click cancel', async () => {
        // 點選 取消 按鈕
        await element(by.buttonText('取消')).click();
        // 點選 window 彈出視窗 確定
        await browser.switchTo().alert().accept();
        // await element(by.buttonText('確定')).click(); // ???
        // 驗證導頁到 http://localhost:4200/events
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toEqual('http://localhost:4200/events');
    });

});
/** [end] 實戰演練：練習 window 彈出視窗操作 */

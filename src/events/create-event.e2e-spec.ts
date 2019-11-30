import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
import * as path from 'path';
/** [start] 實戰演練：練習表單操作 (回家作業) */
describe('Class-1116-HW: add a new event', () => {
    const newUrl = 'http://localhost:4200/events/new';
    const eventUrl = 'http://localhost:4200/events';
    // 開啟建立活動頁面
    it('should open create event page', async () => {
        await browser.get(newUrl);
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toBe(newUrl);
    });
    // 建立活動: Protractor 實戰
    it('should create a new event: [Protractor 實戰]', async () => {
        // 輸入活動名稱: Protractor 實戰
        await element(by.name('name')).sendKeys('Protractor 實戰');
        // 使用 Datepicker 選擇活動日期: 2019/11/16
        // TODO: 進階練習 ：請嘗試設定 1997/12/31 這個日期！
        await selectDate();
        // 輸入活動時間: 早上
        await element(by.name('time')).sendKeys('早上');
        // 輸入活動票價: 500
        await element(by.name('price')).sendKeys('500');
        // 輸入活動地址: 中正路 100 號 ；城市: 台北市 ；國家: 台灣
        await element(by.name('address')).sendKeys('中正路 100 號');
        await element(by.name('city')).sendKeys('台北市');
        await element(by.name('country')).sendKeys('台灣');
        // 輸入活動網址: http://example.com
        await element(by.name('onlineUrl')).sendKeys('http://example.com');
        // 上傳活動圖片: e2e/src/assets/Protractor.png
        const imgPath = path.resolve('./src/assets/Protractor.png');
        await element(by.name('imageFile')).sendKeys(imgPath);
        // 點擊 儲存 按鈕
        await element(by.buttonText('儲存')).click();
        await browser.sleep(1000); // 等待1秒
        // 驗證 活動列表 顯示 Protractor 實戰 活動
        await browser.get(eventUrl);
        const events = await element(by.css('body > events-app > ng-component > div')).getText();
        expect(events).toContain('PROTRACTOR 實戰');
    });
});
// 使用 Datepicker 選擇活動日期: 2019/11/16
// 建議包成方法，不須撰寫重複的程式(if 很多地方使用到日期選擇器)
// 如為別人實作的日期選擇器，不需替別人作測試!
async function selectDate() {
    await element(by.tagName('mat-datepicker-toggle')).click();
    await browser.sleep(1000); // 等待1秒
    const calendar = element(by.tagName('mat-calendar'));
    await calendar.element(by.className('mat-calendar-header')).element(by.className('mat-calendar-period-button mat-button')).click();
    await browser.sleep(1000); // 等待1秒
    const calendar_body = calendar.element(by.tagName('tbody'));
    await calendar_body.element(by.cssContainingText('div', '2019')).click();
    await browser.sleep(1000); // 等待1秒
    await calendar_body.element(by.cssContainingText('div', 'NOV')).click();
    await browser.sleep(1000); // 等待1秒
    await calendar_body.element(by.cssContainingText('div', '16')).click();
    await browser.sleep(1000); // 等待1秒
}
/** [end] 實戰演練：練習表單操作 (回家作業) */

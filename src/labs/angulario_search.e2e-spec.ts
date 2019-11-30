import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
/** [start] 實戰演練：練習 ExpectedCondition */
describe('Class-1130: the user does search on angular.io', () => {
    const url = 'https://angular.io/';
    // 開啟 angular.io
    it('should open angular.io page', async () => {
        await browser.get(url);
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toContain(url);
    });
    // 搜尋 ngzone，點選 ngZone 導至 NgZone 頁面
    it('should search ngzone and goto NgZone page', async () => {
        // 搜尋條件輸入 ngzone
        await $('input[type="search"]').sendKeys('ngzone');
        // 等待搜尋畫面
        const searchResults = element(by.className('search-results'));
        await browser.wait(EC.textToBePresentInElement(searchResults, 'NgZone'), 5000);
        // 點擊 NgZone 連結
        await element(by.linkText('NgZone')).click();
        // 檢查頁面標題出現 NgZone 字樣
        const wait = EC.textToBePresentInElement(element(by.id('ngzone')), 'NgZone');
        await browser.wait(wait, 5000);
        expect(await element(by.id('ngzone')).isPresent()).toBe(true);
    });
});
/** [end] 實戰演練：練習 ExpectedCondition */

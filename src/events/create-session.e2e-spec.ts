import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
/** [start] 實戰演練：練習表單操作2 (回家作業) */
fdescribe('Class-1116-HW: add a new session', () => {
    const event1_Url = 'http://localhost:4200/events/1';
    // 開啟第一項活動頁面
    it('should open event1 page', async () => {
        await browser.get(event1_Url);
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toBe(event1_Url);
    });
    // 建立議程: Protractor 表單練習
    it('should create a new session: [Protractor 表單練習]', async () => {
        // 點擊 建立議程
        await element(by.linkText('建立議程')).click();
        // 輸入議程名稱: Protractor 表單練習
        await element(by.id('sessionName')).sendKeys('Protractor 表單練習');
        // 輸入主講人: John
        await element(by.id('presenter')).sendKeys('John');
        // 選擇演講時間: 一小時
        await element(by.name('duration')).element(by.cssContainingText('option', '一小時')).click();
        // 選擇場次: 上午場
        await element(by.css(`input[type=radio][name=period][value=上午場]`)).click();
        // 選擇適合程度: 初級、中級
        await element(by.css(`input[type=checkbox][name=level][value=初級]`)).click();
        await element(by.css(`input[type=checkbox][name=level][value=中級]`)).click();
        // 輸入演講內容: 自動化 Protractor 表單
        await element(by.id('abstract')).sendKeys('自動化 Protractor 表單');
        // 點擊 儲存 按鈕
        await element(by.buttonText('儲存')).click();
        // 驗證議程列表顯示: [Protractor 表單練習]
        await browser.get(event1_Url);
        const sessions = await element(by.css('body > events-app > ng-component > div')).getText();
        expect(sessions).toContain('Protractor 表單練習');
    });

});
/** [end] 實戰演練：練習表單操作2 (回家作業) */


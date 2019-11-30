import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
/** [start] 實戰演練：練習切換不同 window 操作 */
describe('Class-1130: add a new user', () => {
    const url = 'http://localhost:4200/user/new';
    // 開起 新增會員 頁面
    it('should open add new user page', async () => {
        await browser.get(url);
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toContain(url);
    });
    // 填上基本資料及同意會員權益，並新增會員
    it('should fill form and accept membership term', async () => {
        // 填上基本資料
        await element(by.id('username')).sendKeys('testUser');
        await element(by.id('password')).sendKeys('test123');
        await element(by.id('firstName')).sendKeys('test');
        await element(by.id('lastName')).sendKeys('User');
        // 點選 會員權益 會彈出一個全新視窗 靜態網頁
        await browser.waitForAngularEnabled(false); // *要記得關掉*
        await element(by.id('membershipterm')).click();
        const handles = await browser.getAllWindowHandles();
        await browser.switchTo().window(handles[1]);
        // 將會員權益視窗 捲動到到最底部 ，並點選 同意 按鈕
        const acceptBtn = $('button#accept');
        await browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
        await browser.wait(EC.elementToBeClickable(acceptBtn), 5000);
        await acceptBtn.click();
        // 返回 新增會員表單視窗 ，點選 新增
        await browser.switchTo().window(handles[0]);
        await browser.sleep(3000);
        const addBtn = element(by.buttonText('新增'));
        await browser.wait(EC.elementToBeClickable(addBtn), 5000);
        await addBtn.click();
        // 驗證網址導向 http://localhost:4200/events
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toContain('http://localhost:4200/events');
    });
});
/** [end] 實戰演練：練習切換不同 window 操作 */

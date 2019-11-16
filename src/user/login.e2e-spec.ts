import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

/** [start] 練習測試登入情境 */
describe('Class-1116: login success', () => {
    // 開啟網站
    it('should open home page', async () => {
      await browser.get('/');
      const real_url = await browser.getCurrentUrl();
      expect(real_url).toBe('http://localhost:4200/events');
    });
    // 進入登入頁面
    it('should go to login page', async () => {
        await element(by.linkText('登入')).click();  // click() 回傳為 Promise，為非同步(加上 await)
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toContain('/user/login');
    });
    // 執行登入(成功)
    it('should login to event page', async () => {
        await element(by.id('userName')).sendKeys('John');
        await element(by.id('password')).sendKeys('123456');
        await element(by.buttonText('登入')).click();
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toContain('/events');
    });

});
/** [end] 練習測試登入情境*/

/** [start] 練習測試登入失敗的情境 */
describe('Class-1116: login error', () => {
    // 開啟網站
    it('should open home page', async () => {
      await browser.get('/');
      const real_url = await browser.getCurrentUrl();
      expect(real_url).toBe('http://localhost:4200/events');
    });
    // 進入登入頁面
    it('should go to login page', async () => {
        await element(by.linkText('登入')).click();
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toContain('/user/login');
    });
    // [從使用者角度(建議)]執行登入失敗，顯示錯誤訊息
    it('[in user]should show error message when login error', async () => {
        await element(by.id('userName')).sendKeys('John');
        await element(by.id('password')).sendKeys('abc');
        await element(by.buttonText('登入')).click();
        const errMsg = await element(by.css('ng-component')).getText();
        expect(errMsg).toContain('錯誤');
    });
    // [從程式開發者角度]執行登入失敗，顯示錯誤訊息，判斷是否顯示正確的錯誤訊息
    it('[in developer]should show error message when login error', async () => {
        await element(by.id('userName')).sendKeys('John');
        await element(by.id('password')).sendKeys('abc');
        await element(by.buttonText('登入')).click();
        const errMsg = await element(by.css('ng-component > div > div'));
        expect(errMsg).toBeTruthy();
    });
    it('[in developer]should show correct error message', async () => {
        const errMsg = await element(by.css('ng-component > div > div')).getText();
        expect(errMsg).toEqual('錯誤的帳號密碼');
    });

});
/** [end] 練習測試登入失敗的情境 */

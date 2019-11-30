import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
/** [start] 實戰演練： browser.wait 進階應用 */
describe('Class-1130: the user submit a captcha', () => {
    const captchaUrl = 'http://localhost:4200/labs/captcha';
    // 開啟 驗證碼測試 頁面
    it('should open the captcha page', async () => {
        await browser.get(captchaUrl);
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toContain(captchaUrl);
    });
    // 等待使用者輸入驗證碼，並送出顯示 驗證碼正確 訊息
    it('should enter a captcha and submit than get a message like 驗證碼正確', async () => {
        await browser.wait(waitForCaptchaInput, 10000);
        await element(by.buttonText('送出')).click();
        expect(element(by.className('body')).getText()).toContain('驗證碼正確');
    });

    // 判斷是否輸入驗證碼
    function waitForCaptchaInput(){
        return new Promise((resolve, reflect) => {
            const captchaCode = element(by.name('captchaCode'));
            const interval = setInterval(async () => {
            await captchaCode.getAttribute('value').then(value => {
                if (value.length === 4) {
                    clearInterval(interval);
                    return resolve('已輸入驗證碼');
                }
            });
        }, 500);
        });
    }
});
/** [end] 實戰演練： browser.wait 進階應用 */

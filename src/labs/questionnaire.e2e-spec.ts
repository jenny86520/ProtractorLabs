import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
/** [start] 練習克服 NgZone 下無限等待的問題 */
describe('the user submit a questionnaire', () => {
    // 開啟問卷頁面
    it('should open questionnaire page', async () => {
        await browser.get('http://localhost:4200/labs/questionnaire');
        const real_url = await browser.getCurrentUrl();
        expect(real_url).toEqual('http://localhost:4200/labs/questionnaire');
    });
    // 輸入問卷資料並送出
    it('should fill the form and submit', async () => {
        await element(by.name('username')).sendKeys('aka_lu');
        await element(by.name('codeLanguage')).sendKeys('C++');
        await element(by.buttonText('送出')).click();
        const msg = await element(by.css('body')).getText();
        expect(msg).toContain('送出成功');
    });
});
/** [end] 練習克服 NgZone 下無限等待的問題 */

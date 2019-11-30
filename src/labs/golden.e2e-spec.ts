import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
import { compareScreenshot } from 'blue-harvest';
/** [start] 實戰演練：練習畫面呈現測試 */
describe('Class-1130: main page present', () => {
    it('should compare page', async () => {
        await browser.get('/');
        await browser.manage().window().setSize(1366, 1024);
        const golden = 'src/assets/goldens/home.png';
        const diffDir = 'src/assets/goldens/';
        await browser.waitForAngular(); // 截圖前一定要 wait
        const actual = await browser.takeScreenshot();
        try {
            const result = await compareScreenshot(actual, golden, diffDir);
            expect(result).toBeTruthy();
        } catch (e) {
            console.log(e);
            expect(e).toBeFalsy();
        }
    });
});
/** [end] 實戰演練：練習畫面呈現測試 */

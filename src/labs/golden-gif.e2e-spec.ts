import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';
import { compareScreenshot, addMask } from 'blue-harvest';
/** [start] 實戰演練：練習遮罩動態圖的呈現測試 */
describe('Class-1130: gif page present', () => {
    it('should compare gif page', async () => {
      await browser.get('http://localhost:4200/labs/gif');
      await browser.manage().window().setSize(1366, 1024);
      // 遮罩動態圖
      const gif = element(by.tagName('img'));
      await addMask(gif, 'gray');
      // 比較圖片
      const golden = 'src/assets/goldens/gifPage.png';
      const diffDir = 'src/assets/goldens/';
      await browser.waitForAngular(); // 截圖前一定要 wait
      const actual = await browser.takeScreenshot();
      try {
          const result = compareScreenshot(actual, golden, diffDir);
          expect(result).toBeTruthy();
    } catch (e) {
        console.log(e);
        expect(e).toBeFalsy();
      }
    });
});
/** [end] 實戰演練：練習遮罩動態圖的呈現測試 */

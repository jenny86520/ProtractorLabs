/** [start] 防止網頁跑版的 E2E 測試
 *  =產生 Golden 圖的步驟=
 * >set UPDATE_GOLDENS=true
 * >npm test
 * =正式執行截圖測試的步驟=
 * >set UPDATE_GOLDENS=
 * >npm test
 */
// 如果 UPDATE_GOLDENS 為 "1" 或 " 則會自動更新 Golden 圖片
process.env['UPDATE_GOLDENS'] = 'true';
// 設定只有以下這些 e2e spec.ts 才會執行畫面截圖比對
let config = require('./protractor.conf').config;
config.specs = './src/labs/golden.e2e-spec.ts';
exports.config = config;
/** [end] 防止網頁跑版的 E2E 測試 */
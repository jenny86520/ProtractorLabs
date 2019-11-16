// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  // 限制所有測試執行時間總長
  allScriptsTimeout: 600000,  
  // 設定測試檔檔名
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  // 設定關閉 Control flow
  SELENIUM_PROMISE_MANAGER: false,
  // 設定瀏覽器
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        // "--headless",  // 若開啟，則將瀏覽器於背景打開
        // "--incognito",
        // "--start-maximized"
      ]
    }
  },

  // SELENIUM_PROMISE_MANAGER: false,
  // 直接執行瀏覽器
  directConnect: true,
  // 由 seleniumServer 待執行瀏覽器
  //seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  // 設定根路徑
  baseUrl: 'http://localhost:4200/',
  // 選擇使用 jasmine 測試框架
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000000,    // 限制單一測試執行時間總長
    print: function() {}
  },
  // 前置設定
  async onPrepare() {
    // 設定 ts 位置
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    // 設定 Report
    jasmine.getEnv().addReporter(new SpecReporter({
      // https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
      spec: {
        // 是否顯示全部錯誤訊息(true: 開啟 | false: 關閉)
        displayStacktrace: false
      }
    }));

    /**
     * 使用保哥的 snippets
     * @type { import("protractor").ProtractorBrowser }
     */
    const browser = global['browser'];
    // await browser.manage().timeouts().implicitlyWait(2000);

    // 當專案不為 Angular 框架開發
    // await browser.waitForAngularEnabled(false);
  }
};

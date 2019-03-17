import { BeforeAll, After, Status, setDefaultTimeout } from "cucumber";
import { browser } from "protractor";
import { config } from "../../conf";

BeforeAll({timeout: 60 * 1000}, async() => {
    setDefaultTimeout(60 * 1000);
    console.log("Execution started");
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    await browser.get(config.baseUrl);
    await browser.manage().window().maximize();
});

After({timeout: 60 * 1000}, async function(scenario) {
    if(scenario.result.status===Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
})
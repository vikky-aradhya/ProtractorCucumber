"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const conf_1 = require("../../conf");
cucumber_1.BeforeAll({ timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    cucumber_1.setDefaultTimeout(60 * 1000);
    console.log("Execution started");
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get(conf_1.config.baseUrl);
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.After({ timeout: 60 * 1000 }, function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NlbmFyaW9Ib29rcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNjZW5hcmlvSG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF1RTtBQUN2RSwyQ0FBcUM7QUFDckMscUNBQW9DO0FBRXBDLG9CQUFTLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBQyxFQUFFLEdBQVEsRUFBRTtJQUN0Qyw0QkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxhQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUMsRUFBRSxVQUFlLFFBQVE7O1FBQy9DLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUcsaUJBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQSJ9
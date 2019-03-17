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
const HomePage_1 = require("../pages/HomePage");
const chai_1 = require("chai");
cucumber_1.defineSupportCode(({ Given, When }) => {
    var homepage = new HomePage_1.HomePage();
    Given(/^User navigates to login page$/, () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.getTitle().then(function (title) {
            console.log("Title is:", title);
            chai_1.assert.equal(title, "PHPTRAVELS | Travel Technology Partner", "Home Page Title Matched");
        });
        yield homepage.clickElementMyAccount();
        yield homepage.clickElementLoginButton();
    }));
    When(/^User Login to PHP Travels$/, { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.getTitle().then((title) => {
            console.log("Login Page title is:", title);
            chai_1.assert.equal(title, "Login", "Login Page Title Matched");
        });
        yield protractor_1.browser.sleep(5000);
        yield homepage.enterLoginDetails("user@phptravels.com", "demouser");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVN0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIb21lU3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQyxnREFBNkM7QUFDN0MsK0JBQThCO0FBRTlCLDRCQUFpQixDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEVBQUUsRUFBRTtJQUNoQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUM5QixLQUFLLENBQUMsZ0NBQWdDLEVBQUUsR0FBUSxFQUFFO1FBQzlDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoQyxhQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSx3Q0FBd0MsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFFLEdBQVEsRUFBRTtRQUM5RCxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sUUFBUSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hFLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9
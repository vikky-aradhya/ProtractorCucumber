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
const protractor_1 = require("protractor");
var myAccountButton = protractor_1.element(protractor_1.by.xpath("(//li[@id='li_myaccount'])[2]"));
var loginLink = protractor_1.element(protractor_1.by.xpath("(//a[@href='https://www.phptravels.net/login'])[2]"));
var userNameTextBox = protractor_1.element(protractor_1.by.name("username"));
var passWordTextBox = protractor_1.element(protractor_1.by.name("password"));
var loginButton = protractor_1.element(protractor_1.by.buttonText("Login"));
class HomePage {
    clickElementMyAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield myAccountButton.click();
        });
    }
    clickElementLoginButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield loginLink.click();
        });
    }
    enterLoginDetails(userName, passWord) {
        return __awaiter(this, void 0, void 0, function* () {
            yield userNameTextBox.sendKeys(userName);
            yield passWordTextBox.sendKeys(passWord);
            yield loginButton.click();
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBRXpDLElBQUksZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7QUFDekUsSUFBSSxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztBQUN4RixJQUFJLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNuRCxJQUFJLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNuRCxJQUFJLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUVsRCxNQUFhLFFBQVE7SUFFWCxxQkFBcUI7O1lBQ3ZCLE1BQU0sZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVLLHVCQUF1Qjs7WUFDekIsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsUUFBUSxFQUFFLFFBQVE7O1lBQ3RDLE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxNQUFNLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsQ0FBQztLQUFBO0NBRUo7QUFoQkQsNEJBZ0JDIn0=
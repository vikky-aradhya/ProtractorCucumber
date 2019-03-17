import { element, by } from "protractor";

var myAccountButton = element(by.xpath("(//li[@id='li_myaccount'])[2]"));
var loginLink = element(by.xpath("(//a[@href='https://www.phptravels.net/login'])[2]"));
var userNameTextBox = element(by.name("username"));
var passWordTextBox = element(by.name("password"));
var loginButton = element(by.buttonText("Login"));

export class HomePage {

    async clickElementMyAccount() {
        await myAccountButton.click();
    }

    async clickElementLoginButton() {
        await loginLink.click();
    }

    async enterLoginDetails(userName, passWord) {
        await userNameTextBox.sendKeys(userName);
        await passWordTextBox.sendKeys(passWord);
        await loginButton.click();
    }

}
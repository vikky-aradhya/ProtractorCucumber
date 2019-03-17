import { defineSupportCode } from "cucumber";
import { browser } from "protractor";
import { HomePage } from "../pages/HomePage";
import { assert } from "chai";

defineSupportCode(({Given, When}) =>{
    var homepage = new HomePage();
    Given(/^User navigates to login page$/, async() =>{
        browser.getTitle().then(function(title){
            console.log("Title is:", title);
            assert.equal(title, "PHPTRAVELS | Travel Technology Partner", "Home Page Title Matched");
        });

        await homepage.clickElementMyAccount();
        await homepage.clickElementLoginButton();
    });

    When(/^User Login to PHP Travels$/, {timeout: 60*1000}, async() => {
        browser.getTitle().then((title)=> {
            console.log("Login Page title is:", title);
            assert.equal(title, "Login", "Login Page Title Matched");
        });
        await browser.sleep(5000);
        await homepage.enterLoginDetails("user@phptravels.com", "demouser");
    })
});
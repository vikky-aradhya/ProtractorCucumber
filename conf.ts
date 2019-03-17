import { Config } from "protractor";
import * as reporter from "cucumber-html-reporter";
import { userInfo } from "os";

var date = new Date();
export let time = date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds();

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    baseUrl: 'https://www.phptravels.net/',
    capabilities: {
        browserName:'chrome'
    },
    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    specs: [
        'e2e/features/*.feature'     // Specs here are the cucumber feature files
    ],
    // cucumber command line options
    cucumberOpts: {
        require: ['e2e/steps/*.js', 'e2e/hooks/*.js'],  // require step definition files before executing features
        tags: ['@home1'],
        format: 'json:reports/cucumberreport.json',                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,          // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        dryRun: false,                 // <boolean> invoke formatters without executing steps
        compiler: "ts:ts-node/register",
    },

    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: 'reports/cucumberreport.json',
            output: "reports/cucumberreport"+time+".html",
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version" : "1.0.0",
                "Test Environment" : "QA",
                "Browser" : "Chrome",
                "Platform" : "Windows 10",
                "Executed By" : userInfo().username,
            }
        };
        reporter.generate(options);
    }
};
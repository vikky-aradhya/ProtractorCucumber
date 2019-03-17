"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = require("cucumber-html-reporter");
const os_1 = require("os");
var date = new Date();
exports.time = date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    baseUrl: 'https://www.phptravels.net/',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'e2e/features/*.feature' // Specs here are the cucumber feature files
    ],
    // cucumber command line options
    cucumberOpts: {
        require: ['e2e/steps/*.js', 'e2e/hooks/*.js'],
        tags: ['@home1'],
        format: 'json:reports/cucumberreport.json',
        strict: true,
        dryRun: false,
        compiler: "ts:ts-node/register",
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: 'reports/cucumberreport.json',
            output: "reports/cucumberreport" + exports.time + ".html",
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "1.0.0",
                "Test Environment": "QA",
                "Browser": "Chrome",
                "Platform": "Windows 10",
                "Executed By": os_1.userInfo().username,
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtREFBbUQ7QUFDbkQsMkJBQThCO0FBRTlCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxRQUFBLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRW5FLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0Msc0JBQXNCO0lBQ3RCLE9BQU8sRUFBRSw2QkFBNkI7SUFDdEMsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFDLFFBQVE7S0FDdkI7SUFDRCxTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxLQUFLLEVBQUU7UUFDSCx3QkFBd0IsQ0FBSyw0Q0FBNEM7S0FDNUU7SUFDRCxnQ0FBZ0M7SUFDaEMsWUFBWSxFQUFFO1FBQ1YsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7UUFDN0MsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2hCLE1BQU0sRUFBRSxrQ0FBa0M7UUFDMUMsTUFBTSxFQUFFLElBQUk7UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLFFBQVEsRUFBRSxxQkFBcUI7S0FDbEM7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2IsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLE1BQU0sRUFBRSx3QkFBd0IsR0FBQyxZQUFJLEdBQUMsT0FBTztZQUM3QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUcsT0FBTztnQkFDdkIsa0JBQWtCLEVBQUcsSUFBSTtnQkFDekIsU0FBUyxFQUFHLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRyxZQUFZO2dCQUN6QixhQUFhLEVBQUcsYUFBUSxFQUFFLENBQUMsUUFBUTthQUN0QztTQUNKLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSixDQUFDIn0=
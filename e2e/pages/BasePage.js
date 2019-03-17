"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var IndentificationType;
(function (IndentificationType) {
    IndentificationType[IndentificationType["Id"] = 0] = "Id";
    IndentificationType[IndentificationType["Name"] = 1] = "Name";
    IndentificationType[IndentificationType["ClassName"] = 2] = "ClassName";
    IndentificationType[IndentificationType["TagName"] = 3] = "TagName";
    IndentificationType[IndentificationType["LinkText"] = 4] = "LinkText";
    IndentificationType[IndentificationType["PartialLinkText"] = 5] = "PartialLinkText";
    IndentificationType[IndentificationType["Css"] = 6] = "Css";
    IndentificationType[IndentificationType["Xpath"] = 7] = "Xpath";
    IndentificationType[IndentificationType["Model"] = 8] = "Model";
    IndentificationType[IndentificationType["ButtonText"] = 9] = "ButtonText";
})(IndentificationType = exports.IndentificationType || (exports.IndentificationType = {}));
class BasePage {
    ElementLocator(obj) {
        if (obj.type == IndentificationType[IndentificationType.Id]) {
            return protractor_1.element(protractor_1.by.id(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.Name]) {
            return protractor_1.element(protractor_1.by.name(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.ClassName]) {
            return protractor_1.element(protractor_1.by.className(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.TagName]) {
            return protractor_1.element(protractor_1.by.tagName(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.LinkText]) {
            return protractor_1.element(protractor_1.by.linkText(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.PartialLinkText]) {
            return protractor_1.element(protractor_1.by.partialLinkText(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.Css]) {
            return protractor_1.element(protractor_1.by.css(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.Xpath]) {
            console.log(obj.value);
            return protractor_1.element(protractor_1.by.xpath(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.Model]) {
            return protractor_1.element(protractor_1.by.model(obj.value));
        }
        else if (obj.type == IndentificationType[IndentificationType.ButtonText]) {
            return protractor_1.element(protractor_1.by.buttonText(obj.value));
        }
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUd6QyxJQUFZLG1CQVdYO0FBWEQsV0FBWSxtQkFBbUI7SUFDM0IseURBQUUsQ0FBQTtJQUNGLDZEQUFJLENBQUE7SUFDSix1RUFBUyxDQUFBO0lBQ1QsbUVBQU8sQ0FBQTtJQUNQLHFFQUFRLENBQUE7SUFDUixtRkFBZSxDQUFBO0lBQ2YsMkRBQUcsQ0FBQTtJQUNILCtEQUFLLENBQUE7SUFDTCwrREFBSyxDQUFBO0lBQ0wseUVBQVUsQ0FBQTtBQUNkLENBQUMsRUFYVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQVc5QjtBQUVELE1BQWEsUUFBUTtJQUNqQixjQUFjLENBQUMsR0FBRztRQUNkLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN4RCxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvRCxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN0QzthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6QzthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMxQzthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUMxRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqRDthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5RCxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUNJLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7Q0FDSjtBQWxDRCw0QkFrQ0MifQ==
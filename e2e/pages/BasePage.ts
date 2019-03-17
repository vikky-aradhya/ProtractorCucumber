import { element, by } from "protractor";


export enum IndentificationType {
    Id,
    Name,
    ClassName,
    TagName,
    LinkText,
    PartialLinkText,
    Css,
    Xpath,
    Model,
    ButtonText
}

export class BasePage {
    ElementLocator(obj) {
        if(obj.type == IndentificationType[IndentificationType.Id]) {
            return element(by.id(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.Name]) {
            return element(by.name(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.ClassName]) {
            return element(by.className(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.TagName]) {
            return element(by.tagName(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.LinkText]) {
            return element(by.linkText(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.PartialLinkText]) {
            return element(by.partialLinkText(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.Css]) {
            return element(by.css(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.Xpath]) {
            console.log(obj.value);            
            return element(by.xpath(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.Model]) {
            return element(by.model(obj.value));
        }
        else if(obj.type == IndentificationType[IndentificationType.ButtonText]) {
            return element(by.buttonText(obj.value));
        }
    }
}
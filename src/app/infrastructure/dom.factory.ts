import { Element } from "./element";
import { Component } from "./component";

export class DomFactory {
    static createElement(element: Element): HTMLElement {
        const htmlElement = document.createElement(element.name);

        if (element.attributes) {
            element.attributes.forEach(attribute => {
                htmlElement.setAttribute(attribute[0], attribute[1]);
            });
        }

        if (element.childs) {
            element.childs.forEach(child => {
                if (typeof child === 'string') {
                    htmlElement.innerText = child;
                }
                else {
                    htmlElement.appendChild(this.createElement(child as Element));
                }
            });
        }

        return htmlElement;
    }

    static createComponent(component: Component): HTMLElement {
        const tag = component
            .constructor
            .name
            .replace(/([A-Z])/g, (word) => `-${word.toLowerCase()}`)
            .replace('-component', (word) => '')
            .substring(1);

        return this.createElement({
            name: tag,
            childs: component.childs
        });
    }
}
import { Element } from "./element";
import { Component } from "./component";

export class DomFactory {
    static createElement(dom: Element): HTMLElement {
        const element = document.createElement(dom.name);

        if (dom.attributes) {
            dom.attributes.forEach(attribute => {
                element.setAttribute(attribute[0], attribute[1]);
            });
        }

        if (dom.childs) {
            dom.childs.forEach(child => {
                if (typeof child === 'string') {
                    element.innerText = child;
                }
                else {
                    element.appendChild(this.createElement(child as Element));
                }
            });
        }

        return element;
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
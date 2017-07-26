import { Dom } from "./dom";
import { Component } from "./component";

export class DomFactory {
    static createElement(dom: Dom): HTMLElement {
        const element = document.createElement(dom.tag);

        if (dom.attributes) {
            dom.attributes.forEach(attribute => {
                element.setAttribute(attribute[0], attribute[1]);
            });
        }

        if (dom.childs) {
            dom.childs.forEach(child => {
                if (typeof child === 'string') {
                    element.innerText = child as string;
                }
                else {
                    element.appendChild(this.createElement(child as Dom));
                }
            });
        }

        return element;
    }

    static createComponent(component: Component): HTMLElement {
        const tag = component.constructor.name;
        return this.createElement({
            tag: tag,
            childs: component.childs
        });
    }
}
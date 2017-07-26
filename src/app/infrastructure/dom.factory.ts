import { Dom } from "./dom";

export class DomFactory {
    static create(dom: Dom): HTMLElement {
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
                    element.appendChild(this.create(child as Dom));
                }
            });
        }

        return element;
    }
}
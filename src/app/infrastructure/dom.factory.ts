import { VirtualDOM } from "./dom";

export class VirtualDomFactory {
    static create(dom: VirtualDOM): string {
        let childs = '';

        if (dom.childs) {
            dom.childs.forEach(child => childs += (typeof child === 'string') ? child : this.create(child as VirtualDOM));
        }

        return `<${dom.tag}>${childs}</${dom.tag}>`;
    }
}
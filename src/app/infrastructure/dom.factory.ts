import { VirtualDOM } from "./dom";

export class VirtualDomFactory {
    static create(dom: VirtualDOM): string {
        let childs = '';

        if (dom.childs) {
            dom.childs.forEach(child => childs += (typeof child === 'string') ? child : this.create(child as VirtualDOM));
        }

        let attributes = '';
        if(dom.attributes) {
            dom.attributes.forEach(attribute => attributes += `${attribute[0]}="${attribute[1]}"`);
        }

        return `<${dom.tag} ${attributes}>${childs}</${dom.tag}>`;
    }
}
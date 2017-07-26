import { Dom } from "./dom";
import { DomFactory } from "./dom.factory";

export abstract class Component {
    readonly abstract template: Dom;
    readonly abstract tag: string;
    render(): HTMLElement {
        return DomFactory.create(this.template);
    }
}
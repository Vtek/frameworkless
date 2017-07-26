import { Element } from "./element";
import { DomFactory } from "./dom.factory";

export abstract class Component {
    readonly abstract childs: Element[];

    constructor() {

    }
    render(): HTMLElement {
        return DomFactory.createComponent(this);
    }
}
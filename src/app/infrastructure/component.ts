import { Dom } from "./dom";
import { DomFactory } from "./dom.factory";

export abstract class Component {
    readonly abstract childs: Dom[];

    constructor() {

    }
    render(): HTMLElement {
        return DomFactory.createComponent(this);
    }
}
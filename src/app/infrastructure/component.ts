import { VirtualDOM } from "./dom";

export abstract class Component {
    abstract template(): VirtualDOM;
    abstract tag(): string;
}
import { Dom } from "./dom";

export abstract class Component {
    abstract template(): Dom;
    abstract tag(): string;
}
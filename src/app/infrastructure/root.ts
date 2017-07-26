import { Startup } from "./startup";

export function root(constructor: Function) {
    Startup.rootComponent = constructor.name;
}
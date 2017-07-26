import { Component } from "./component";
import { Container } from "./container";
import { Module } from "./module";

export class Startup {
    static container: Container;//TODO static is a wrong way to pass container, need to be injected when service injections will be available
    static rootComponent: string;
    static launch(...modules: Module[]): void {
        Startup.container = new Container(modules);
        const component = Startup.container.getInstance<Component>(Startup.rootComponent);
        document.body.appendChild(component.render());
    }
}
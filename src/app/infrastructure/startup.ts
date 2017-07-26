import { Component } from "./component";
import { Container } from "./container";
import { Module } from "./module";

export class Startup {
    static launch(rootComponent: string, ...modules: Module[]): void {
        const container = new Container(modules);
        const component = container.getInstance<Component>(rootComponent);
        document.body.appendChild(component.render());
    }
}
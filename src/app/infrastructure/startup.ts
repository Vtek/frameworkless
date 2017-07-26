import { Component } from "./component";
import { Container } from "./container";
import { Module } from "./module";

export class Startup {
    static rootComponent: string;
    static launch(...modules: Module[]): void {
        const container = new Container(modules);
        const component = container.getInstance<Component>(Startup.rootComponent);
        document.body.appendChild(component.render());
    }
}
import { Module } from "./module";
import { Dependency } from "./dependency";

export class Container {
    private dependencies: Array<any> = [];
    constructor(...modules: Module[]) {
        modules.forEach((module) => module.load(this));
    }

    register<T>(dependency: Dependency<T>) {
        this.dependencies.push(dependency);
    }

    getInstance<T>(className: string): T {
        const dependency = this.dependencies.find((dependency) => className == dependency.className);
        const ctor = (dependency as Dependency<T>).ctor;
        return new ctor();
    }
}
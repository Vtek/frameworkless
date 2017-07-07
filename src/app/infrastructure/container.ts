import { Module } from "./module";
import { Dependency } from "./dependency";

export class Container {
    private dependencies: Array<Dependency> = [];
    constructor(...modules: Module[]) {
        modules.forEach((module) => module.load(this));
    }

    register(dependency: Dependency) {
        this.dependencies.push(dependency);
    }

    getInstance<T>(className: string): T {
        this.dependencies.forEach((dependency) => {
            if(className == dependency.className) {
                const c = (dependency.ctor as new() => T);
                return (new c() as T);
            }
        });

        throw new Error(`Unknow type ${className}`);
    }
}
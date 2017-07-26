import { Module } from "./module";
import { Dependency } from "./dependency";

export class Container {
    private dependencies: Array<any> = [];
    constructor(modules: Module[]) {
        modules.forEach((module) => module.load(this));
    }

    register<T>(dependency: Dependency<T>) {
        this.dependencies.push(dependency);
    }

    hasDependency(name: string): boolean {
        for (let i: number = 0, l: number = this.dependencies.length; i < l; i++) {
            if (this.dependencies[i].name === name)
                return true;
        }

        return false;
    }

    getInstance<T>(name: string): T {
        const dependency = this.dependencies.find((dependency) => name == dependency.name);
        const ctor = (dependency as Dependency<T>).ctor;
        return new ctor();
    }
}
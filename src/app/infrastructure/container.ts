import { Module } from "./module";

export class Container {
    constructor(...modules: Module[]) {
        modules.forEach((module) => module.load(this));
    }
}
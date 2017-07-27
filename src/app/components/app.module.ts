import { Module } from '../infrastructure/module';
import { Container } from '../infrastructure/container';
import { Dependency } from '../infrastructure/dependency';
import { Test } from './test';
import { Name } from "./name";

export class AppModule implements Module {
    load(container: Container): void {
        container.register(new Dependency<Test>(Test));
        container.register(new Dependency<Name>(Name));
    }
}
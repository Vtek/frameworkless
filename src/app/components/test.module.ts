import { Module } from '../infrastructure/module';
import { Container } from '../infrastructure/container';
import { Dependency } from '../infrastructure/dependency';
import { TestComponent } from './test.component';
import { NameComponent } from "./name.component";

export class TestModule implements Module {
    load(container: Container): void {
        container.register(new Dependency<TestComponent>(TestComponent));
        container.register(new Dependency<NameComponent>(NameComponent));
    }
}
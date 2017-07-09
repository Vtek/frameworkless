import { Module } from '../infrastructure/module';
import { Container } from '../infrastructure/container';
import { Dependency } from '../infrastructure/dependency';
import { TestComponent } from "./test.component";
import { Lifecycle } from '../infrastructure/lifecycle';

export class TestModule implements Module {
    load(container: Container): void {
        let dependency: Dependency<TestComponent> = {
            ctor: TestComponent,
            className: TestComponent.name,
            lifecycle: Lifecycle.singleton
        }
        container.register(dependency);
    }
}
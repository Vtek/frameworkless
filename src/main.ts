import { Startup } from './app/infrastructure/startup';
import { TestComponent } from "./app/components/test.component";
import { Container } from "./app/infrastructure/container";
import { TestModule } from "./app/components/test.module";

window.onload = () => {
    const container = new Container(new TestModule());
    Startup.container = container;
    Startup.launch<TestComponent>(TestComponent);
};
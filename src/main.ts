import { Startup } from './app/infrastructure/startup';
import { TestComponent } from "./app/components/test.component";

window.onload = () => {
    Startup.launch<TestComponent>(TestComponent);
};
import { Startup } from './app/infrastructure/startup';
import { TestModule } from "./app/components/test.module";

window.onload = () => Startup.launch('TestComponent', new TestModule());
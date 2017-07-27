import { Startup } from './app/infrastructure/startup';
import { AppModule } from "./app/components/app.module";

window.onload = () => Startup.launch(new AppModule());
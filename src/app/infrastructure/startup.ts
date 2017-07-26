import { Component } from "./component";
import { Container } from "./container";
import { DomFactory } from "./dom.factory";

export class Startup {
    static container: Container;
    static launch<T extends Component>(component: new () => T, containerId: string = 'container'): void {

        let container = document.getElementById(containerId);

        if (container == null) {
            container = document.createElement('div');
            container.setAttribute('id', containerId);
            document.body.appendChild(container);
        }

        const c = Startup.container.getInstance<T>(component.name);
        container.innerHTML = DomFactory.create(c.template());
    }
}
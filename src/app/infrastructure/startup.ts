import { Component } from "./component";

export class Startup {
    static launch<T extends Component>(containerId: string, component: new () => T): void {
        let container = document.getElementById(containerId);

        if(container == null) {
            container = new HTMLDivElement();
            container.setAttribute('id', 'container');
        }
        
        const c = new component();
        container.innerHTML = c.template();
    }
}
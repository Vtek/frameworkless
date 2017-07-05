import { Component } from "./component";

export class Startup {
    static launch<T extends Component>(component: new () => T, containerId: string = 'container'): void {
        
        let container = document.getElementById(containerId);

        if(container == null) {
            container = document.createElement('div');
            container.setAttribute('id', containerId);
            document.body.appendChild(container);
        }
        
        const c = new component();
        container.innerHTML = c.template();
    }
}
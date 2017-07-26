import { Component } from "../infrastructure/component";
import { Element } from "../infrastructure/element";

export class NameComponent extends Component {
    childs: Element[] = [{
        name: 'div',
        childs: ['This is just another component!']
    }]
}
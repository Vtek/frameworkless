import { Component } from '../infrastructure/component';
import { Element } from "../infrastructure/element";
import { root } from "../infrastructure/root";
import { Startup } from "../infrastructure/startup";

@root
export class TestComponent extends Component {
    readonly childs: Element[] = [{
        name: 'h1',
        childs: [
            'This component is a little test to start the project !'
        ],
        attributes: [
            ['style', 'color:red;']
        ]
    }, {
        name: 'span',
        childs: [
            'This is awesome to render a Virtual DOM component !!', {
                name: 'ul',
                childs: [{
                    name: 'li',
                    childs: ['test1']
                }, {
                    name: 'li',
                    childs: ['test2']
                }, {
                    name: 'li',
                    childs: ['test2']
                }
                ]
            }
        ]
    }, Startup.container.getInstance('NameComponent')];//TODO what a bad way to deal with child components... :(
}
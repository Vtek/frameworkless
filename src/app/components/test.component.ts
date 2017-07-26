import { Component } from '../infrastructure/component';
import { Dom } from "../infrastructure/dom";

export class TestComponent extends Component {
    readonly tag: string = 'test';
    readonly template: Dom = {
        tag: 'test',
        childs: [{
            tag: 'h1',
            childs: [
                'This component is a little test to start the project !'
            ],
            attributes: [
                ['style', 'color:red;']
            ]
        }, {
            tag: 'span',
            childs: [
                'This is awesome to render a Virtual DOM component !!', {
                    tag: 'ul',
                    childs: [{
                        tag: 'li',
                        childs: ['test1']
                    }, {
                        tag: 'li',
                        childs: ['test2']
                    }, {
                        tag: 'li',
                        childs: ['test2']
                    }
                    ]
                }
            ]
        }
        ]
    };
}
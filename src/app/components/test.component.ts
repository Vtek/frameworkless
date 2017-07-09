import { Component } from '../infrastructure/component';
import { VirtualDOM } from "../infrastructure/dom";

export class TestComponent extends Component {
    tag(): string {
        return 'test';
    }
    template(): VirtualDOM {
        return {
            tag: 'test',
            childs: [{
                    tag: 'h1',
                    childs: [
                        'This component is a little test to start the project !'
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
}
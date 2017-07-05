import { Component } from '../infrastructure/component';

export class TestComponent implements Component {
    template(): string {
        return '<h1>This component is a little test to start the project !</h1>';
    }
}
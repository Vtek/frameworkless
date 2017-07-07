import { ComponentFactory } from './component.factory';

export interface Module {
    load(factory: ComponentFactory): void;
}
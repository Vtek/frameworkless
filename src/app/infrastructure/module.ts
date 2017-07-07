import { Container } from './container';

export interface Module {
    load(container: Container): void;
}
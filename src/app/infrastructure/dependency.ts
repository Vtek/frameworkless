import { Lifecycle } from './lifecycle';

export interface Dependency<T> {
    ctor: new() => T;

    lifecycle: Lifecycle;
}
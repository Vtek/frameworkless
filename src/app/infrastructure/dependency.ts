import { Lifecycle } from './lifecycle';

export interface Dependency<T> {
    className: string;
    ctor: new() => T;
    lifecycle: Lifecycle;
}
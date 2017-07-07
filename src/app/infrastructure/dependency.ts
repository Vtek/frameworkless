import { Lifecycle } from './lifecycle';

export interface Dependency {
    className: string;
    ctor: Function;
    lifecycle: Lifecycle;
}
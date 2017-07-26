export class Dependency<T> {

    readonly name: string;
    readonly ctor: new () => T;

    constructor(ctor: new () => T) {
        this.ctor = ctor;
        this.name = ctor.name;
    }
}
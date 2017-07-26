export interface Element {
    tag: string,
    attributes?: Array<[string, any]>,
    childs?: Array<Element | string>
}
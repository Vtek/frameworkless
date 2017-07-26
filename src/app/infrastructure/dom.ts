export interface Dom {
    tag: string,
    attributes?: Array<[string, any]>,
    childs?: Array<Dom | string>
}
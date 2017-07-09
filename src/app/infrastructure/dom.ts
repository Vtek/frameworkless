export interface VirtualDOM {
    tag: string,
    attributes?: Array<[string, any]>,
    childs?: Array<VirtualDOM | string>
}
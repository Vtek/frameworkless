import { Component } from "./component";

export interface Element {
    name: string,
    attributes?: Array<[string, any]>,
    childs?: Array<Element | string>
}
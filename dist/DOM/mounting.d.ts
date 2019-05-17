import { VNode } from '../core/types';
export declare function mount(vNode: VNode, parentDOM: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: Function[], doc: Document): void;
export declare function mountText(vNode: VNode, parentDOM: Element | null, nextNode: Element | null, doc: Document): void;
export declare function mountElement(vNode: VNode, parentDOM: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: Function[], doc: Document): void;
export declare function mountArrayChildren(children: any, dom: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: Function[], doc: Document): void;
export declare function mountClassComponent(vNode: VNode, parentDOM: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: Function[], doc: Document): void;
export declare function mountFunctionalComponent(vNode: VNode, parentDOM: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: any, doc: Document): void;
export declare function mountClassComponentCallbacks(ref: any, instance: any, lifecycle: Function[]): void;
export declare function mountFunctionalComponentCallbacks(props: any, ref: any, vNode: VNode, lifecycle: Function[]): void;

import { VNode } from '../core/types';
export declare function remove(vNode: VNode, parentDOM: Element | null, doc: Document): void;
export declare function unmount(vNode: any, doc: Document): void;
export declare function unmountAllChildren(children: VNode[], doc: Document): void;
export declare function clearDOM(dom: any): void;
export declare function removeAllChildren(dom: Element, vNode: VNode, children: any, doc: Document): void;

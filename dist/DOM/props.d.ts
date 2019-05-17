import { VNode } from '../core/types';
export declare function patchEvent(name: string, lastValue: any, nextValue: any, dom: any): void;
export declare function patchProp(prop: any, lastValue: any, nextValue: any, dom: Element, isSVG: boolean, hasControlledValue: boolean, lastVNode: VNode | null, doc: Document): void;
export declare function mountProps(vNode: any, flags: any, props: any, dom: any, isSVG: any, doc: any): void;

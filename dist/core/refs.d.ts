export declare function createRef(): {
    current: null;
};
export declare const forwardRef: (render: any) => {
    render: any;
} | undefined;
export declare function pushRef(dom: Element | null, value: Function, lifecycle: Function[]): void;
export declare function unmountRef(ref: any): void;
export declare function mountRef(ref: any, value: any, lifecycle: Function[]): void;

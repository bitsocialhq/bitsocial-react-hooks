declare function renderHook<Result, Props>(callback: (props: Props) => Result, options?: {
    initialProps?: Props;
}): {
    result: {
        current: Result | null;
        all: Result[];
    };
    rerender: (rerenderCallbackProps: Props) => void;
    unmount: () => void;
};
export declare const silenceUpdateUnmountedComponentWarning: () => () => void;
export declare const silenceTestWasNotWrappedInActWarning: () => () => void;
export declare const silenceOverlappingActWarning: () => () => void;
export declare const silenceReactWarnings: () => void;
type WaitForOptions = {
    timeout?: number;
    interval?: number;
};
export declare const resetStores: () => Promise<void>;
export declare const resetDatabasesAndStores: () => Promise<void>;
export { renderHook };
declare const testUtils: {
    silenceTestWasNotWrappedInActWarning: () => () => void;
    silenceUpdateUnmountedComponentWarning: () => () => void;
    silenceOverlappingActWarning: () => () => void;
    silenceReactWarnings: () => void;
    restoreAll: () => void;
    resetStores: () => Promise<void>;
    resetDatabasesAndStores: () => Promise<void>;
    createWaitFor: (rendered: any, waitForOptions?: WaitForOptions) => (waitForFunction: Function) => Promise<void>;
    renderHookWithHistory: typeof renderHook;
    silenceWaitForWarning: boolean;
};
export default testUtils;

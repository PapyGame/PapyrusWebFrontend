/// <reference types="react" />
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
/**
 * HOC to wrap a component to catch exceptions and react accordingly.
 * See https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html#introducing-error-boundaries
 *
 * @author sbegaudeau
 * @author pcdavid
 */
export declare const withErrorBoundary: (Child: React.FunctionComponent<ErrorBoundaryProps>) => {
    new (props: ErrorBoundaryState): {
        render(): JSX.Element;
        context: any;
        setState<K extends keyof ErrorBoundaryState>(state: ErrorBoundaryState | ((prevState: Readonly<ErrorBoundaryState>, props: Readonly<ErrorBoundaryProps>) => ErrorBoundaryState | Pick<ErrorBoundaryState, K>) | Pick<ErrorBoundaryState, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<ErrorBoundaryProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<ErrorBoundaryState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ErrorBoundaryProps>, nextState: Readonly<ErrorBoundaryState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ErrorBoundaryProps>, prevState: Readonly<ErrorBoundaryState>): any;
        componentDidUpdate?(prevProps: Readonly<ErrorBoundaryProps>, prevState: Readonly<ErrorBoundaryState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ErrorBoundaryProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ErrorBoundaryProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ErrorBoundaryProps>, nextState: Readonly<ErrorBoundaryState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ErrorBoundaryProps>, nextState: Readonly<ErrorBoundaryState>, nextContext: any): void;
    };
    /**
     * This is called by React when one of our children component has raised an error.
     * We simply take note of it in the state for the next render() call to decide
     * what to do.
     *
     * @param {*} error the error that was raised.
     */
    getDerivedStateFromError(error: Error): ErrorBoundaryState;
    /**
     * Some magic spell to make this actually work. Ask @sbegaudeau.
     *
     * @param {*} props
     * @param {*} state
     */
    getDerivedStateFromProps(props: ErrorBoundaryProps, state: ErrorBoundaryState): ErrorBoundaryState;
    contextType?: import("react").Context<any>;
};
//# sourceMappingURL=ErrorBoundary.d.ts.map
declare const _default: {
    clearMocks: boolean;
    coverageProvider: string;
    setupFilesAfterEnv: string[];
    testEnvironment: string;
    transform: {
        '^.+\\.(t|j)sx?$': (string | {
            jsc: {
                parser: {
                    syntax: string;
                    tsx: boolean;
                    decorators: boolean;
                };
                keepClassNames: boolean;
                transform: {
                    legacyDecorator: boolean;
                    decoratorMetadata: boolean;
                    react: {
                        runtime: string;
                    };
                };
            };
            module: {
                type: string;
                noInterop: boolean;
            };
        })[];
    };
};
export default _default;
//# sourceMappingURL=jest.config.d.ts.map
declare const _default: () => {
    socketServer: {
        url: string;
        package: string;
        protoPath: string;
        keepalive: {
            keepaliveTimeMs: number;
            keepaliveTimeoutMs: number;
            keepalivePermitWithoutCalls: number;
            http2MaxPingsWithoutData: number;
            http2MinTimeBetweenPingsMs: number;
            http2MinPingIntervalWithoutDataMs: number;
        };
        loader: {
            keepCase: boolean;
            longs: StringConstructor;
            enums: StringConstructor;
            defaults: boolean;
            oneofs: boolean;
        };
    };
};
export default _default;

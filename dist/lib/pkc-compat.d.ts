export declare const getProtocolClient: (account: any) => any;
export declare const getProtocolOptions: (account: any) => any;
export declare const getChainProviders: (account: any) => any;
export declare const getRpcClients: (protocolClient: any) => any;
export declare const getPageRpcClients: (clients: any) => any;
export declare const resolveAuthorNameWithProtocol: (protocolClient: any, options: {
    address?: string;
} | Record<string, any>) => any;
export declare const normalizeOptionsForPkcClient: <T extends Record<string, any> | undefined>(options: T) => T;
export declare const withProtocolAliases: <T extends Record<string, any>>(account: T, protocolClient?: any, protocolOptions?: any) => T;
export * from "./protocol-compat";

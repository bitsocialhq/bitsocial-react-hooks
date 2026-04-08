import assert from "assert";
export const getProtocolClient = (account) => account === null || account === void 0 ? void 0 : account.pkc;
export const getProtocolOptions = (account) => account === null || account === void 0 ? void 0 : account.pkcOptions;
export const getChainProviders = (account) => { var _a; return (_a = getProtocolOptions(account)) === null || _a === void 0 ? void 0 : _a.chainProviders; };
export const getRpcClients = (protocolClient) => { var _a; return ((_a = protocolClient === null || protocolClient === void 0 ? void 0 : protocolClient.clients) === null || _a === void 0 ? void 0 : _a.pkcRpcClients) || {}; };
export const getPageRpcClients = (clients) => (clients === null || clients === void 0 ? void 0 : clients.pkcRpcClients) || {};
export const resolveAuthorNameWithProtocol = (protocolClient, options) => {
    const resolveAuthorName = (protocolClient === null || protocolClient === void 0 ? void 0 : protocolClient.resolveAuthorAddress) || (protocolClient === null || protocolClient === void 0 ? void 0 : protocolClient.resolveAuthorName);
    assert(typeof resolveAuthorName === "function", "protocol client resolveAuthorName/resolveAuthorAddress missing");
    return resolveAuthorName.call(protocolClient, options);
};
export const normalizeOptionsForPkcClient = (options) => {
    if (!options) {
        return options;
    }
    const normalized = Object.assign({}, options);
    if (normalized.resolveAuthorNames == null && normalized.resolveAuthorAddresses != null) {
        normalized.resolveAuthorNames = normalized.resolveAuthorAddresses;
    }
    delete normalized.resolveAuthorAddresses;
    delete normalized.chainProviders;
    return normalized;
};
export const withProtocolAliases = (account, protocolClient, protocolOptions) => {
    const nextAccount = Object.assign({}, account);
    if (protocolClient !== undefined) {
        nextAccount.pkc = protocolClient;
    }
    if (protocolOptions !== undefined) {
        nextAccount.pkcOptions = protocolOptions;
    }
    return nextAccount;
};
export * from "./protocol-compat";

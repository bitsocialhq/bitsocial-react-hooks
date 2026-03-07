export declare const normalizeEthAliasDomain: (address: string) => string;
export declare const getCanonicalSubplebbitAddress: (address: string) => string;
export declare const getEquivalentSubplebbitAddressGroupKey: (address: string) => string;
export declare const pickPreferredEquivalentSubplebbitAddress: (addresses: string[]) => string;
export declare const areEquivalentSubplebbitAddresses: (addressA?: string, addressB?: string) => boolean;

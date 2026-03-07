const isEthAliasDomain = (address) => {
    const lower = address.toLowerCase();
    return lower.endsWith(".eth") || lower.endsWith(".bso");
};
export const normalizeEthAliasDomain = (address) => address.endsWith(".bso") ? address.slice(0, -4) + ".eth" : address;
export const getCanonicalSubplebbitAddress = (address) => address.toLowerCase().endsWith(".eth") ? address.slice(0, -4) + ".bso" : address;
export const getEquivalentSubplebbitAddressGroupKey = (address) => {
    const lower = address.toLowerCase();
    return isEthAliasDomain(lower) ? getCanonicalSubplebbitAddress(lower) : address;
};
export const pickPreferredEquivalentSubplebbitAddress = (addresses) => addresses.find((address) => address.toLowerCase().endsWith(".bso")) || addresses[0];
export const areEquivalentSubplebbitAddresses = (addressA, addressB) => {
    if (addressA === addressB) {
        return true;
    }
    if (typeof addressA !== "string" || typeof addressB !== "string") {
        return false;
    }
    const lowerA = addressA.toLowerCase();
    const lowerB = addressB.toLowerCase();
    if (!isEthAliasDomain(lowerA) || !isEthAliasDomain(lowerB)) {
        return false;
    }
    return normalizeEthAliasDomain(lowerA) === normalizeEthAliasDomain(lowerB);
};

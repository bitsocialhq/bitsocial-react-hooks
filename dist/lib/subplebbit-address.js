export const isEthAliasDomain = (address) => {
    const lower = address.toLowerCase();
    return lower.endsWith(".eth") || lower.endsWith(".bso");
};
export const normalizeEthAliasDomain = (address) => address.endsWith(".bso") ? address.slice(0, -4) + ".eth" : address;
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

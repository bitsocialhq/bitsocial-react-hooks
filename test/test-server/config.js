const getPort = (envName, fallback) => {
  const value = process.env[envName];
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw Error(`${envName} '${value}' not a valid port`);
  }
  return parsed;
};

export const offlineIpfs = {
  apiPort: 14325,
  gatewayPort: 14326,
  swarmPort: 14327,
  args: "--offline",
};

export const pubsubIpfs = {
  apiPort: 14328,
  gatewayPort: 14329,
  swarmPort: 14330,
  args: "--enable-pubsub-experiment",
};

export const pkcRpc = {
  port: getPort("TEST_PKC_RPC_PORT", 48392),
};

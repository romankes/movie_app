export const baseEnv = () => ({
  API_VERSION: 1,
  BASE_URL: 'http://192.168.0.104:8001',
  IS_PRODUCTION: true,
  IS_DEVELOPMENT: false,
  IS_TESTING: false,
});

export type Environment = ReturnType<typeof baseEnv>;

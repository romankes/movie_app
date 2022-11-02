export const baseEnv = () => ({
  API_VERSION: 1,
  BASE_URL: 'http://localhost:8001',
  IS_PRODUCTION: true,
  IS_DEVELOPMENT: false,
  IS_TESTING: false,
});

export type Environment = ReturnType<typeof baseEnv>;

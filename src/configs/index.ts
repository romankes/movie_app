import {Environment} from './env/base';

type TEnvironments = {
  development: Environment;
  production: Environment;
  test: Environment;
};

const environments: TEnvironments | any = {
  development: require('./env/development'),
  production: require('./env/production'),
  test: require('./env/test'),
};

export default environments.development.default;

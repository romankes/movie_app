import {baseEnv, Environment} from './base';

const env = baseEnv();

const productionEnv: Environment = {
  ...env,
};

export default productionEnv;

import {object, string} from 'yup';

export const schema = object({
  email: string().required('required').email('invalid_email'),
  password: string().required('required'),
});

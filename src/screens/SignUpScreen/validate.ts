import {object, ref, string} from 'yup';

export const schema = object({
  email: string().required('required').email('invalid_email'),
  password: string().required('required'),
  username: string().required('required'),
  confirmPassword: string().oneOf(
    [ref('password'), null],
    'password_not_match',
  ),
});

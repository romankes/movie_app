import {object, string} from 'yup';

export const schema = object({
  email: string().required('Введіть email').email('Некоректний email'),
  password: string().required('Введіть пароль'),
});

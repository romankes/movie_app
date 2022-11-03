import {object, ref, string} from 'yup';

export const schema = object({
  email: string().required('Введіть email').email('Невірний email'),
  password: string().required('Введіть пароль'),
  name: string().required('Введіть ім`я'),
  confirmPassword: string().oneOf(
    [ref('password'), null],
    'Паролі не співпадають',
  ),
});

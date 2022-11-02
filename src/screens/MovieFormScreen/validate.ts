import {array, number, object, string} from 'yup';

export const schema = object({
  title: string().required('Обов`язкове поле'),
  year: number().typeError('Некоректний рік').min(1850, 'Рік замалий'),
  format: string().required('Обов`язкове поле'),
  actors: array().min(1, 'Обов`язковий хоча б один актор'),
});

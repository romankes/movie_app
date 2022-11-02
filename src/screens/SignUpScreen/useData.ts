import {Auth, authActions} from '@/bus/auth';
import {uiSelectors} from '@/bus/ui';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {schema} from '../SignInScreen/validate';

export const useData = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(uiSelectors.getLoading('sign_up'));

  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<Auth.SignUpForm>({
    defaultValues: {
      // email: '',
      // name: '',
      // password: '',
      // confirmPassword: '',
      name: 'test',
      email: 'test@test.com',
      password: '612135',
      confirmPassword: '612135',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Auth.SignUpForm) => {
    console.log(data);

    dispatch(authActions.signUpAsync(data));
  };

  return {control, handleSubmit: handleSubmit(onSubmit), isValid, isLoading};
};

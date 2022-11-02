import {Auth, authActions} from '@/bus/auth';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validate';
import {uiSelectors} from '@/bus/ui';

export const useData = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(uiSelectors.getLoading('sign_in'));

  const {
    handleSubmit,
    control,
    formState: {isValid},
  } = useForm<Auth.ReqSignIn>({
    defaultValues: {
      email: 'test@test.com',
      password: '612135',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Auth.ReqSignIn) => {
    dispatch(authActions.signInAsync(data));
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
    isLoading,
    isValid,
  };
};

import Toast, {ToastConfigParams} from 'react-native-toast-message';

type TArgs = {
  type: 'error' | 'success';
  text1: string;
};

export const showToast = ({type, text1}: TArgs) => {
  Toast.show({
    type,
    text1,
    position: 'top',
    visibilityTime: 2500,
  });
};

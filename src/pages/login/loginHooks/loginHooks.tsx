import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, register } from '../loginApi/loginApi';
import { ILogin, IRegister } from '../loginTypes/loginTypes';

export function useLogin() {
  const queryClient = useQueryClient();
  const loginFn = useMutation({
    mutationFn: async (data: ILogin) => {
      return login(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['login']);
      queryClient.refetchQueries(['login', { force: true }]);
    },
  });

  return {
    loginFn,
  };
}

export function useRegister() {
  const queryClient = useQueryClient();
  const registerFn = useMutation({
    mutationFn: async (data: IRegister) => {
      return register(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['login']);
      queryClient.refetchQueries(['login', { force: true }]);
    },
  });

  return {
    registerFn,
  };
}

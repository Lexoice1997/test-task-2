import { $host } from '../../../helpers/api/api';
import { ILogin, IRegister } from '../loginTypes/loginTypes';

export function register(data: IRegister) {
  return $host.post(`/client/register`, data);
}

export function login(data: ILogin) {
  return $host.post(`/client/login`, data);
}

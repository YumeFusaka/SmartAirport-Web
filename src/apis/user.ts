import type { UserInfo, UserLoginParams, UserLoginResult } from '@/types/user';
import http, { type Data } from '@/utils/axios';

export const userLoginAPI = (
  params: UserLoginParams,
): Promise<Data<UserLoginResult>> => {
  return http({
    url: "/user/login",
    method: "POST",
    data: params,
  }).then((res) => res.data as Data<UserLoginResult>);
};

export const userRegisterAPI = (
  params: UserInfo,
): Promise<Data<String>> => {
  return http({
    url: "/user/register",
    method: "POST",
    data: params,
  }).then((res) => res.data as Data<String>);
};
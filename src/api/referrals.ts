import { ParamsList, ReqCreateBody, ReqListItem } from 'src/models/api/referrals';
import { api } from './index';
import { jsonFormData } from 'src/utils/formdata';
import { DataObj } from 'src/models/api';

export function list(params: ParamsList) {
  return api.mainKy.get('users/profile/referrals', {
    searchParams: params,
  });
}

export function reqList() {
  return api.mainKy.get<DataObj<ReqListItem[]>>('users/profile/withdrawal-requests').json();
}

export function reqCreate(body: ReqCreateBody) {
  return api.mainKy.post('users/profile/withdrawal-requests', {
    body: jsonFormData(body),
  }).json();
}

import { api } from './index';
import { ProfileData } from 'src/models/api/profile';
import { DataObj } from 'src/models/api'

export function show() {
  return api.mainKy.get<DataObj<ProfileData>>('users/profile').json();
}

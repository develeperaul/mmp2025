import { boot } from "quasar/wrappers";
import { Notify } from 'quasar';
import { show as showProfile } from 'src/api/profile';
import useAuthStore from 'src/stores/authStore';
import { Loading } from 'quasar';
import { HTTPError } from "ky";
import * as Token from 'src/api/tokens';

export default boot(async ({ app }) => {
  const authStore = useAuthStore();

  try {
    Loading.show();
    const res = await showProfile();
    authStore.setUser(res.data);
  } catch(e) {
    const message = 'Не удалось загрузить пользователя.';

    if(e instanceof HTTPError) {
      if(e.response.status === 401) {
        Token.cleanTokensData();
      } else {
        console.log(message);
      }
    } else {
      console.log(message);
    }

    authStore.setUser(null);
  } finally {
    Loading.hide();
  }
});

import { defineStore } from 'pinia'
import { auth, verify } from 'src/api/auth'
import { setTokensData } from 'src/api/tokens'
import { ProfileData } from 'src/models/api/profile';

export default defineStore('auth', () => {
  const user = ref<ProfileData | null>(null);
  const phone = ref<String>('')
  const login = async () => {
    const localPhone = window.localStorage.getItem('phone')

    try {
      if (phone.value) await auth(`+7${phone.value}`)
    } catch (e) {
      throw e
    }
  }
  const verifyClient = async (code: string) => {
    try {
      let res = null
      if (phone.value) res = await verify(`+7${phone.value}`, code)

      if (res && res.access_token)
        setTokensData(res.access_token, res.expires_in)
      return res
    } catch (e) {
      throw e
    }
  }

  function setUser(data: ProfileData | null) {
    user.value = data;
  }

  return {
    phone,
    user,
    setUser,
    login,
    verifyClient,
  }
})

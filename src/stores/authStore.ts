import { defineStore } from 'pinia'
import { auth, verify } from 'src/api/auth'
import { setTokensData, cleanTokensData } from 'src/api/tokens'
import { ProfileData } from 'src/models/api/profile'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default defineStore('auth', () => {
  const router = useRouter()

  const user = ref<ProfileData | null>(null)
  const phone = ref<String>('')
  const login = async () => {
    const localPhone = window.localStorage.getItem('phone')

    try {
      if (localPhone) await auth(`+7${JSON.parse(localPhone)}`)
      else {
        if (phone.value) await auth(`+7${phone.value}`)
      }
    } catch (e) {
      throw e
    }
  }
  const logout = async () => {
    cleanTokensData()

    window.location.reload()
  }
  const verifyClient = async (code: string) => {
    try {
      let res = null

      if (phone.value) res = await verify(`+7${phone.value}`, code)
      else {
        const localPhone = window.localStorage.getItem('phone')
        if (localPhone) res = await verify(`+7${JSON.parse(localPhone)}`, code)
      }

      if (res && res.access_token)
        setTokensData(res.access_token, res.expires_in)
      return res
    } catch (e) {
      throw e
    }
  }

  function setUser(data: ProfileData | null) {
    user.value = data
  }

  return {
    phone,
    user,
    setUser,
    login,
    verifyClient,
    logout,
  }
})

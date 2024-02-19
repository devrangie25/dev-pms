import { defineStore } from "pinia";
import { parse, stringify } from "zipson";
import { handleRegister, handleLogin } from '../server/api/auth'
import { ref } from 'vue'

//     },
//     persist: {
//         storage: sessionStorage,
//         key: "auth",
//         paths: ["isAuthenticated"],
//         serializer: {
//             deserialize: parse,
//             serialize: stringify,
//         },
//     },
// });

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false)
  const user = ref(null)

  const setIsAuthenticated = (value: boolean) => {
    isAuthenticated.value = value
  }

  const getIsAuthenticated = (): boolean => {
    return isAuthenticated.value
  }

  const setAuthenticatedUser = (value: any) => {
    user.value = value
  }

  const getAuthenticatedUser = (): any => {
    return user.value
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  const login = async (params: any) => {
    try {
      const response = await handleLogin(params)
      setIsAuthenticated(response.status !== 'error')

      if (response.status !== 'error') {
        setAuthenticatedUser(response.data?.user)
      }
      return response
    } catch (error) {
      console.error('Error in Store Auth Login Function', error)
    }
  }

  const register = async (params: any) => {
    try {
      const response = await handleRegister(params)

      if (response.status === 'error') {
        console.error('Error Register User', response)
      }
      return response
    } catch (error) {
      console.error('Error in Store Auth Register Function', error)
    }
  }

  return {
    isAuthenticated,
    login,
    user,
    logout,
    register,
    setIsAuthenticated,
    setAuthenticatedUser,
    getAuthenticatedUser,
    getIsAuthenticated
  }
})
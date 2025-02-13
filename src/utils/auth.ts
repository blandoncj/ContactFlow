import { jwtDecode } from 'jwt-decode'
import { errorMessages } from '../constants'
import { DecodedToken } from '../models'

export const getDecodedToken = (): DecodedToken => {
  const token = localStorage.getItem('token')

  if (!token) throw new Error(errorMessages.unauthorized)

  return jwtDecode<DecodedToken>(token)
}

export const getUserInitials = (): string => {
  const decodedToken = getDecodedToken()
  const nameParts = decodedToken.fullname.split(' ')

  return (nameParts[0].charAt(0)) + (nameParts[1]?.charAt(0) || '')
}

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token')
  const apiKey = import.meta.env.VITE_API_KEY

  if (!token) throw new Error(errorMessages.unauthorized)

  return {
    'Authorization': `Bearer ${token}`,
    'x-api-key': apiKey
  }
}

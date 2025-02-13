import { type UserId } from '../types'

export interface DecodedToken {
  id: UserId
  fullname: string
  username: string
  is_active: boolean
}

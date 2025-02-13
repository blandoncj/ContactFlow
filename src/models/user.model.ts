import { type UserId } from '../types'

export interface UserApiResponse {
  id: UserId
  fullname: string
  username: string
  is_active: boolean
}

export interface SigninUser {
  username: string
  password: string
}

export interface User {
  id: UserId
  fullname: string
  username: string
  isActive: boolean
}

export interface CreateUser extends Omit<User, 'id' | 'isActive'>, SigninUser { }

export type UpdateUser = Partial<Omit<CreateUser, 'fullname'>>

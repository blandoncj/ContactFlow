import { type ContactId, type UserId } from '../types'

export interface ContactApiResponse {
  id: ContactId
  firstname: string
  lastname?: string
  email?: string
  is_favorite: boolean
  user_id: UserId
}

export interface Contact {
  id: ContactId
  firstname: string
  lastname?: string
  email?: string
  isFavorite: boolean
  userId: UserId
}

export type CreateContact = Omit<Contact, 'id'>

export type UpdateContact = Partial<Omit<CreateContact, 'userId'>>


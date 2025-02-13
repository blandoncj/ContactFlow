import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className='h-screen flex items-center justify-center'>
      {children}
    </div>
  )
}

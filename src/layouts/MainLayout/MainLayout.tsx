import { ReactNode } from 'react'
import { Sidebar } from '../../components'

interface Props {
  children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <Sidebar />
      {children}
    </div>
  )
}

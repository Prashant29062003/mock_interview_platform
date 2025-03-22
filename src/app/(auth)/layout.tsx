import React, { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full justify-center items-center p-6'>{children}</div>
  )
}

export default AuthLayout
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default async function AppLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  const isAuthenticatedUser = await isAuthenticated()

  if (!isAuthenticatedUser) {
    redirect('/')
  }

  return (
    <>
      {children}
      {sheet}
    </>
  )
}

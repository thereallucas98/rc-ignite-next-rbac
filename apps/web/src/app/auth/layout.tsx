import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isAuthenticatedUser = await isAuthenticated()

  if (isAuthenticatedUser) {
    redirect('/')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-xs">{children}</div>
    </div>
  )
}

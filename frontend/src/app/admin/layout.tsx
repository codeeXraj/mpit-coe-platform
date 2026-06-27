import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard - MPIT CoE',
  description: 'Admin Management Panel',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import { DashboardSidebar } from '@/components/component/DashboardSidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clearpath Dashboard',
  description: 'Breathing clarity into work',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <DashboardSidebar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

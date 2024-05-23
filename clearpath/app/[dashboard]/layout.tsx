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
      <body className={inter.className}>
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
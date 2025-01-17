import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import NavBar from '@/components/NavBar'
import LandingHeader from '@/components/LandingHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blanjer - Social-First Financial Management',
  description: 'Manage shared expenses through social features and smart automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar /> */}
        <LandingHeader />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
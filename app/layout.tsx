import '~/styles/globals.css'

import { fontSans } from '~/config/fonts'
import { Providers } from '~/app/providers'

import clsx from 'clsx'

import { Metadata } from 'next'
import { siteConfig } from '~/config/site'
import { Navbar } from '~/components/navbar'
import { BottomNavbar } from '~/components/bottom-navbar'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/tigreicon.png',
    shortcut: '/tigreicon.png',
    apple: '/tigreicon.png',
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="container mx-auto max-w-lg flex-grow pb-24 pt-8">
              {children}
            </main>
            {/* @ts-expect-error Async Server Component */}
            <BottomNavbar />
          </div>
        </Providers>
      </body>
    </html>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}

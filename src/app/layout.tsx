import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import type { Metadata } from 'next'
import { Preahvihear,Karla } from 'next/font/google'
import ReduxProvider from "../providers/redux-provider"
import AuthProvider from '../providers/nextauth-provider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const preahvihear = Preahvihear({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-preahvihear',
  weight : "400"
})

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
  weight : "400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${preahvihear.variable} ${karla.variable}`}>
      <body>
      <ReduxProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ReduxProvider>
      </body>
    </html>
  )
}

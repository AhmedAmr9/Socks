import './globals.css'
import '../styles/mobile-responsive.css'
import '../styles/professional-globals.css'
import { Pacifico, Roboto } from 'next/font/google'
import MobileEnhancementWrapper from '@/components/MobileEnhancementWrapper'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Socks Specialty Coffee',
  description: 'Welcome to Socks Coffee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pacifico.variable} ${roboto.variable}`}>
      <body className="bg-[#FFFDE7] text-[#5D4037] font-roboto">
        <MobileEnhancementWrapper>
          {children}
        </MobileEnhancementWrapper>
      </body>
    </html>
  )
}

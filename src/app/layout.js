import Navbar from '@/component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Shiyam Lawrence',
  description: 'Made With Shiyam Lawrence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
       
    </html>
  )
}

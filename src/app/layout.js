import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amabo Learn',
  description: 'CREATED AND RUN BY YOUNG AND INNOVATIVE MINDS WHO ARE WORKING TO HELP HIGH-SCHOOL STUDENTS GET ACCESS TO free online & offline learning materials  and help  improve learning via socializing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className="w-screen h-screen bg-white-1">
      <body className={inter.className + "w-full h-full overflow-x-hidden"}>{children}</body>
    </html>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserDashboard from './user/dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <UserDashboard/>
  )
}

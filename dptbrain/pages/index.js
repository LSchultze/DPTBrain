import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "pages/components/Header"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-custom_background flex flex-shrink-0 w-screen h-screen'>
      <Header/>
    </main>
  )
}

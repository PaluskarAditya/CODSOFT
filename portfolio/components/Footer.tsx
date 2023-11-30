import React from 'react'
import { Instagram, Linkedin, Github } from 'lucide-react'
import Link from '@/node_modules/next/link'

export default function Footer() {
  return (
    <footer className='bg-blue-700 p-3 flex justify-between items-center'>
      <p className='text-sm tracking-tighter text-white'>All rights reserved @Aditya paluskar 2023</p>
      <div className='flex gap-2 justify-center items-center'>
        <Link href={'https://www.linkedin.com/in/aditya-paluskar-285698265/'} target="_blank" ><Linkedin className="w-4 h-4 text-white" /></Link>
        <Link href={'https://github.com/PaluskarAditya'} target="_blank" ><Github className="w-4 h-4 text-white" /></Link>
        <Link href={'https://instagram.com/giggasad'} target="_blank" ><Instagram className="w-4 h-4 text-white" /></Link>
      </div>
    </footer>
  )
}

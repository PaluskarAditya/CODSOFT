import Link from '@/node_modules/next/link'
import React from 'react'

export default function Navbar() {
	return (
		<nav className='z-20 fixed top-0 left-0 right-0 flex justify-center items-center'>
			<div className='bg-white flex justify-center items-center hover:scale-105 transition-all border border-gray-100 rounded-full p-1 px-2 mt-3 shadow-lg shadow-gray-200/50'>
				<ul className='flex lg:gap-1 sm:gap-2 tracking-tight'>
					<li className='p-2 lg:text-xs sm:text-xs cursor-pointer rounded-l-full'><Link href={'#home'}>Home</Link></li>
					<li className='p-2 lg:text-xs sm:text-xs cursor-pointer'><Link href={'#about'}>About</Link></li>
					<li className='p-2 lg:text-xs sm:text-xs cursor-pointer'><Link href={'#projects'}>Projects</Link></li>
					<li className='p-2 lg:text-xs sm:text-xs cursor-pointer rounded-r-full'><Link href={'#connect'}>Connect</Link></li>
				</ul>
			</div>
		</nav>
	)
}

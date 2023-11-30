import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { isLogin } = useSelector(state => state.user);
  const { username } = useSelector(state => state.user.user);

  return (
    <nav className='p-3 z-50 fixed top-0 left-0 right-0 backdrop-blur-md bg-white/90'>
      <ul className='flex justify-center items-center gap-3'>
        <li className='cursor-pointer text-sm tracking-tighter font-medium p-2'><Link to={'/'}>Quizz App</Link></li>
        <li className='cursor-pointer text-sm tracking-tighter font-medium p-2'><Link to={'/explore'}>Explore</Link></li>
        {isLogin ? <li className='cursor-pointer text-sm tracking-tighter font-medium p-2'><Link to={'/create'}>Create</Link></li> : ""}
        {isLogin ? <li className='cursor-pointer text-sm tracking-tighter font-medium p-2 px-4 rounded-full bg-black text-white'><Link to={'/me'}>{username}</Link></li> : <li className='cursor-pointer text-sm tracking-tighter font-medium p-2'><Link to={'/auth'}>Login</Link></li>}
      </ul>
    </nav>
  )
}

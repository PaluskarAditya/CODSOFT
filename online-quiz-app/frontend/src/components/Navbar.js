import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/userSlice';

export default function Navbar() {
  const { isLogin } = useSelector(state => state.user);
  const username = useSelector(state => state.user.user.username);
  const [opts, setOpts] = useState(false);
  const disp = useDispatch();
  const nav = useNavigate();
  const handleLogout = () => {
    disp(logout());
    nav('/auth');
    setOpts(false)
  }

  return (
    <nav className='p-3 z-50 fixed top-0 left-0 right-0 backdrop-blur-md bg-white/90'>
      <ul className='min-[390]:inline flex p-2 justify-between items-start w-full flex-col'>
        <div className='flex justify-between items-center w-full'>
          <li className='text-xl font-medium tracking-tighter'><Link to={'/'} onClick={() => setOpts(false)}>Quizz App</Link></li>
          <button onClick={() => setOpts(!opts)}>
            {opts ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>}
          </button>
        </div>
        {opts ? <div className='w-full mt-[20px]'>
          <ul className='flex justify-start items-start flex-col h-full w-full'>
            <li onClick={() => setOpts(false)} className='p-1'><Link to={'/explore'}>Explore</Link></li>
            <li onClick={() => setOpts(false)} className='p-1'><Link to={'/create'}>Create</Link></li>
            {isLogin ? <li onClick={() => setOpts(false)} className='p-1'><Link to={'/me'}>{username}</Link></li> : ""}
            {isLogin ? <li onClick={() => setOpts(false)} className='p-1'><button className='bg-black text-white rounded-full tracking-tighter p-1 px-3 text-sm' onClick={handleLogout}>Logout</button></li> : ""}
          </ul>
        </div> : ""}
      </ul>
      <ul className='flex justify-center items-center gap-3 max-[390px]:hidden'>
        <li className='cursor-pointer text-sm tracking-tighter font-medium p-2'><Link to={'/'}>Quizz App</Link></li>
        <li className='cursor-pointer text-sm tracking-tighter font-medium p-2'><Link to={'/explore'}>Explore</Link></li>
        {isLogin ? <li className='cursor-pointer text-sm tracking-tighter font-medium p-2'><Link to={'/create'}>Create</Link></li> : ""}
        {isLogin ? <li className='cursor-pointer text-sm tracking-tighter font-medium p-2' onClick={handleLogout} >Logout</li> : ""}
        {isLogin ? <li className='cursor-pointer text-sm tracking-tighter font-medium p-2 px-4 rounded-full bg-black text-white'><Link to={'/me'}>{username}</Link></li> : <li className='cursor-pointer text-sm tracking-tighter font-medium p-2'><Link to={'/auth'}>Login</Link></li>}
      </ul>
    </nav>
  )
}

import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const nav = useNavigate();
  const { isLogin } = useSelector(state => state.user);
  const handleStart = () => {
    isLogin === false ? nav('/auth') : nav('/explore');
  }

  return (
    <div className='h-screen max-[390px]:flex-col max-[390px]:h-full max-[390px]:mt-[60px] flex justify-center items-center gap-5 p-10'>
      <div className='flex-1 flex flex-col justify-center items-end'>
        <h1 className='font-black text-right tracking-tighter text-5xl'>Upgrade & Update yourself with our online quizzes</h1>
        <button className='p-3 px-6 rounded-full bg-black text-white w-max mt-5' onClick={handleStart}>get started</button>
      </div>
      <div className='flex-1'>
        <img src='/hero.jpg' className='h-96 object-contain w-full' alt='hero' loading='lazy' />
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/userSlice'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Auth() {
  const [auth, setAuth] = useState(true);
  const [cred, setCred] = useState({ uname: "", email: "", pass: "" });
  const { isLogin } = useSelector(state => state.user);
  const { error } = useSelector(state => state.user);
  const nav = useNavigate();
  const disp = useDispatch();

  useEffect(() => {
    if (error !== null) {
      toast(`${error}`, { position: "bottom-right", theme: "dark" })
      nav('/auth');
    }
  }, [error]);

  useEffect(() => {
    if (isLogin === true) {
      nav('/');
    }
  }, [ ,isLogin])

  const handleLogin = () => {
    disp(login(cred));
  }

  return (
    <div className='h-screen -mt-[60px] flex justify-center items-center p-5'>
      {auth ? <div className='border justify-center items-center flex mt-[160px] border-gray-200 rounded-md shadow-xl shadow-gray-200'>
        <div className='flex-1 rounded-l-md w-1/2 relative'>
          <img src='/login.jpg' alt='background' className='rounded-l-md h-full w-full' />
          <div className='flex rounded-l-md justify-center items-center bg-black/40 absolute top-0 left-0 right-0 bottom-0'>
            <h1 className='text-white tracking-tighter text-5xl font-bold text-center w-1/2'>Sharpen yourself with amazing quizzes</h1>
          </div>
        </div>
        <div className='w-1/3 flex-col flex justify-center items-center p-5 rounded-r-md gap-3'>
          <h1 className='text-4xl font-bold tracking-tight'>Signin</h1>
          <div className='flex flex-col justify-center items-center w-full gap-1'>
            <input onChange={e => setCred({ ...cred, [e.target.name]: e.target.value })} name='uname' value={cred.uname} type='text' className='rounded-full text-sm w-3/4 py-2 px-4 border border-gray-200 outline-none' placeholder='Username' />
          </div>
          <div className='flex flex-col justify-center items-center w-full gap-1'>
            <input onChange={e => setCred({ ...cred, [e.target.name]: e.target.value })} name='pass' value={cred.pass} type='text' placeholder='Password' className='rounded-full text-sm w-3/4 py-2 px-4 border border-gray-200 outline-none' />
          </div>
          <button className='bg-black rounded-full text-white text-sm w-3/4 p-2 px-4' onClick={handleLogin}>
            login
          </button>
          <p onClick={() => setAuth(!auth)} className='text-xs text-gray-500'>new here? <span className='cursor-pointer text-black font-medium'>Sign up</span></p>
        </div>
      </div> : <div className='border mt-[160px] justify-center items-center flex border-gray-200 rounded-md shadow-xl shadow-gray-200'>
        <div className='flex-1 rounded-l-md w-1/2 relative'>
          <img src='/signup.jpg' alt='background' className='rounded-l-md h-full w-full max-h-[90%]' />
          <div className='flex rounded-l-md justify-center items-center bg-black/40 absolute top-0 left-0 right-0 bottom-0'>
            <h1 className='text-white tracking-tighter text-5xl font-bold text-center w-1/2'>More quizzes more Smart</h1>
          </div>
        </div>
        <div className='w-1/3 flex-col flex justify-center items-center p-5 rounded-r-md gap-3'>
          <h1 className='text-4xl font-bold tracking-tight'>Signup</h1>
          <div className='flex flex-col justify-center items-center w-full gap-1'>
            <input onChange={e => setCred({ ...cred, [e.target.name]: e.target.value })} name='email' value={cred.email} type='email' className='rounded-full text-sm w-3/4 py-2 px-4 border border-gray-200 outline-none' placeholder='Email' />
          </div>
          <div className='flex flex-col justify-center items-center w-full gap-1'>
            <input onChange={e => setCred({ ...cred, [e.target.name]: e.target.value })} name='uname' value={cred.uname} type='text' placeholder='Username' className='rounded-full text-sm w-3/4 py-2 px-4 border border-gray-200 outline-none' />
          </div>
          <div className='flex flex-col justify-center items-center w-full gap-1'>
            <input onChange={e => setCred({ ...cred, [e.target.name]: e.target.value })} name='pass' value={cred.pass} type='password' placeholder='Password' className='rounded-full text-sm w-3/4 py-2 px-4 border border-gray-200 outline-none' />
          </div>
          <button className='bg-black rounded-full text-white text-sm w-3/4 p-2 px-4'>
            register
          </button>
          <p onClick={() => setAuth(!auth)} className='text-xs text-gray-500'>already a user? <span className='cursor-pointer text-black font-medium'>Sign in</span></p>
        </div>
      </div>}
    </div>
  )
}

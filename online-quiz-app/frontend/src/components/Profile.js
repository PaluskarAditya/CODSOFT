import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuiz, getUserQuizes } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [ img, setImg ] = useState('');
  const { userQuizes, isLogin } = useSelector(state => state.user);
  const { username, name, email } = useSelector(state => state.user.user);
  const [allquiz, setAllquiz] = useState([]);
  const [ user, setUser ] = useState({name, uname: username, email});
  const disp = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    disp(getUserQuizes());
  }, [])

  useEffect(() => {
    setAllquiz(userQuizes);
  }, [userQuizes])

  useEffect(() => {
    !isLogin ? nav('/auth') : nav('/me'); 
  }, [])

  return (
    <div className='flex flex-col p-5 mt-[60px] gap-5'>
      <div className='flex justify-center -mt-[60px] items-center gap-10 h-screen'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <img src='/profile.png' className='rounded-full h-1/2 w-1/2' />
          <label className='p-2 px-4 w-max mt-5 bg-black text-white rounded-full text-sm text-center cursor-pointer' htmlFor='file'>change image</label>
          <input type='file' id='file' className='hidden' value={img} onChange={e => setImg(e.target.value)} />
        </div>
        <div className='flex-1 flex justify-center items-center flex-col w-full'>
          <div className='flex justify-center items-center gap-3 mb-2 w-1/2'>
            <p className='text-sm text-gray-700'>Name: </p>
            <input value={user.name} name='name' onChange={e => setUser({...user, [e.target.name]: e.target.value})} type='text' className='w-full rounded-full border border-gray-200 py-2 px-4 mt-2 outline-none text-sm' placeholder='John doe' />
          </div>
          <div className='flex justify-center items-center gap-3 mb-2 w-1/2'>
            <p className='text-sm text-gray-700'>Username: </p>
            <input value={user.uname} name='uname' onChange={e => setUser({...user, [e.target.name]: e.target.value})} type='text' className='w-full rounded-full border border-gray-200 py-2 px-4 mt-2 outline-none text-sm' placeholder='john_doe' />
          </div>
          <div className='flex justify-center items-center gap-3 w-1/2'>
            <p className='text-sm text-gray-700'>Email: </p>
            <input disabled value={user.email} name='email' type='text' className='w-full rounded-full border border-gray-200 py-2 px-4 mt-2 outline-none text-sm' placeholder='john@gmail.com' />
          </div>
          <button className='p-2 px-4 mt-4 text-sm bg-black text-white rounded-full text-center cursor-pointer'>
            save changes
          </button>
        </div>
      </div>
      <div className='flex p-5 flex-col gap-3'>
        <h1 className='font-bold tracking-tight text-3xl'>Your quizes</h1>
        <ul className='flex flex-col gap-4'>
          {
            allquiz ? allquiz?.map(el => <li key={el._id} className='border flex justify-between items-center border-gray-200 rounded-md p-3'>
            <h1 className='tracking-tight font-medium text-md'>{el.name}</h1>
            <button className='bg-black text-white rounded-full p-2 px-4 text-xs' onClick={() => disp(deleteQuiz(el._id))}>delete</button>
          </li>) : <h1 className='tracking-tight font-medium text-md'>No quizes</h1>
          }
        </ul>
      </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { randomQuizes } from '../features/quizSlice';
import { useNavigate } from 'react-router-dom';

export default function TopQuiz() {
  const [quiz, setQuiz] = useState([]);
  const { topQuiz } = useSelector(state => state.quiz);
  const disp = useDispatch();
  const nav = useNavigate();
 
  useEffect(() => {
    disp(randomQuizes());
  }, []);

  useEffect(() => {
    setQuiz(topQuiz);
  }, [topQuiz]);

  const handleRedirect = (id) => {
    nav(`/explore/${id}`);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='tracking-tight font-bold text-3xl'>Random Quizes</h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-5 p-5 justify-center items-center'>
        {
          quiz?.length > 0 ? quiz.map(el => <div key={el._id} className='flex flex-col border border-gray-200 rounded-md'>
          <div className='flex justify-center items-center bg-gray-100 p-5'>
            <h1 className='text-center font-medium tracking-tight'>{el.data.name}</h1>
          </div>
          <div className='flex flex-col p-5'>
            <div className='flex justify-between items-center'>
              <p className='text-sm'>Take this quiz to test your general knowledge.</p>
              <button onClick={() => handleRedirect(el._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            <p className='text-xs text-gray-500 tracking-tighter text-left mt-3'>~ By {el.data.author}</p>
          </div>
        </div>) : <h1>Loading...</h1>
        }
      </div>
    </div>
  )
}

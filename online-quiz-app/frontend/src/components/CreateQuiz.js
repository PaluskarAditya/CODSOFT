import React, { useState } from 'react'

export default function CreateQuiz() {
  const [ name, setName ] = useState('');
  const [q1, setQ1] = useState({ text: "", answer: "", options: ["", "", "", ""] });

  return (
    <div className='flex flex-col mt-[60px] justify-center items-center'>
      <h1 className='text-3xl tracking-tighter font-medium my-3 mt-10'>Create an awesome quizz</h1>
      <div className='w-1/2 flex gap-3 items-center justify-center mt-3'>
        <p className='text-sm'>enter quiz name: </p>
        <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='General Knowledge Quiz' className='text-xs p-2 rounded-full w-full outline-none border border-gray-200' />
      </div>
      <div className='flex flex-col gap-5 mt-5 w-full justify-center items-center'>
        <div className='bg-gray-100 p-5 rounded-md flex flex-col w-1/2'>
          <div className='flex gap-2 flex-col'>
            <p className='text-sm'>enter question 1: </p>
            <input type='text' placeholder='General Knowledge Quiz' className='text-xs p-2 rounded-full w-full outline-none border border-gray-200' />
            <div className='flex flex-col gap-2 mt-3'>
              <p className='text-sm'>enter answers and select correct one: </p>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q1' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q1' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q1' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q1' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 p-5 rounded-md flex flex-col w-1/2'>
          <div className='flex gap-2 flex-col'>
            <p className='text-sm'>enter question 2: </p>
            <input type='text' placeholder='General Knowledge Quiz' className='text-xs p-2 rounded-full w-full outline-none border border-gray-200' />
            <div className='flex flex-col gap-2 mt-3'>
              <p className='text-sm'>enter answers and select correct one: </p>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q2' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q2' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q2' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q2' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 p-5 rounded-md flex flex-col w-1/2'>
          <div className='flex gap-2 flex-col'>
            <p className='text-sm'>enter question 3: </p>
            <input type='text' placeholder='General Knowledge Quiz' className='text-xs p-2 rounded-full w-full outline-none border border-gray-200' />
            <div className='flex flex-col gap-2 mt-3'>
              <p className='text-sm'>enter answers and select correct one: </p>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q3' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q3' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q3' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q3' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 p-5 rounded-md flex flex-col w-1/2'>
          <div className='flex gap-2 flex-col'>
            <p className='text-sm'>enter question 4: </p>
            <input type='text' placeholder='General Knowledge Quiz' className='text-xs p-2 rounded-full w-full outline-none border border-gray-200' />
            <div className='flex flex-col gap-2 mt-3'>
              <p className='text-sm'>enter answers and select correct one: </p>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q4' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q4' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q4' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q4' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 p-5 rounded-md flex flex-col w-1/2'>
          <div className='flex gap-2 flex-col'>
            <p className='text-sm'>enter question 5: </p>
            <input type='text' placeholder='General Knowledge Quiz' className='text-xs p-2 rounded-full w-full outline-none border border-gray-200' />
            <div className='flex flex-col gap-2 mt-3'>
              <p className='text-sm'>enter answers and select correct one: </p>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q5' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q5' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q5' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q5' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 p-5 rounded-md flex flex-col w-1/2'>
          <div className='flex gap-2 flex-col'>
            <p className='text-sm'>enter question 6: </p>
            <input type='text' placeholder='General Knowledge Quiz' className='text-xs p-2 rounded-full w-full outline-none border border-gray-200' />
            <div className='flex flex-col gap-2 mt-3'>
              <p className='text-sm'>enter answers and select correct one: </p>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q6' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q6' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q6' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
              <div className='flex justify-center items-center'>
                <input type='radio' name='q6' />
                <input type='text' placeholder='General Knowledge Quiz' className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

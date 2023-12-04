import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuiz } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { getAllQuizes } from '../features/quizSlice';

export default function CreateQuiz() {
  const { isLogin } = useSelector(state => state.user);
  const { userQuizes } = useSelector(state => state.user.user);
  const [name, setName] = useState('');
  const nav = useNavigate();
  const [questions, setQuestions] = useState([
    { text: '', answer: '', options: ['', '', '', ''] },
    { text: '', answer: '', options: ['', '', '', ''] },
    { text: '', answer: '', options: ['', '', '', ''] },
    { text: '', answer: '', options: ['', '', '', ''] },
    { text: '', answer: '', options: ['', '', '', ''] },
    { text: '', answer: '', options: ['', '', '', ''] },
  ]);
  const disp = useDispatch();

  const handleChange = (questionIndex, optionIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleQuestion = (questionIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].text = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOption = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answer = optionIndex;
    setQuestions(newQuestions);
  };

  const handlePostQuiz = () => {
    const data = { name, questions };
    disp(createQuiz(data));
    toast('Quiz created successfully!!!', { position: "bottom-right", theme: "dark" });
    setTimeout(() => nav('/explore'), 1000);
  }

  useEffect(() => {
    disp(getAllQuizes());
  }, [userQuizes])

  useEffect(() => {
    isLogin === false && nav('/auth');
  }, [])

  return (
    <div className='flex flex-col mt-[60px] justify-center items-center'>
      <h1 className='lg:text-3xl tracking-tighter font-medium my-3 mt-10 max-[390px]:text-2xl'>Create an awesome quiz</h1>
      <div className='lg:w-1/2 min-[390px]:w-3/4 flex gap-3 items-center justify-center mt-3'>
        <p className='text-sm'>Enter quiz name: </p>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='General Knowledge Quiz'
          className='text-xs p-2 rounded-full w-full outline-none border border-gray-200'
        />
      </div>
      <div className='flex flex-col gap-5 mt-5 w-full justify-center items-center mb-5'>
        {questions.map((q, questionIndex) => (
          <div key={questionIndex} className='bg-gray-100 p-5 rounded-md flex flex-col lg:w-1/2 min-[390px]:w-3/4'>
            <div className='flex gap-2 flex-col'>
              <p className='text-sm'>{`Enter question ${questionIndex + 1}: `}</p>
              <input
                value={q.text}
                onChange={(e) => handleQuestion(questionIndex, e)}
                type='text'
                placeholder={`Question ${questionIndex + 1}`}
                className='text-xs p-2 rounded-full w-full outline-none border border-gray-200'
              />
              <div className='flex flex-col gap-2 mt-3'>
                <p className='text-sm'>Enter answers and select correct one: </p>
                {q.options.map((option, optionIndex) => (
                  <div key={optionIndex} className='flex justify-center items-center'>
                    <input
                      type='radio'
                      name={`q${questionIndex}`}
                      value={optionIndex.toString()}
                      onChange={() => handleOption(questionIndex, optionIndex)}
                    />
                    <input
                      value={option}
                      onChange={(e) => handleChange(questionIndex, optionIndex, e)}
                      type='text'
                      placeholder={`Option ${optionIndex + 1}`}
                      className='ml-2 text-xs p-2 rounded-full w-full outline-none border border-gray-200'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePostQuiz} className='w-1/2 sm:w-3/4 max-[390px]:w-3/4 bg-black rounded-full text-sm tracking-tighter text-white p-2 mb-5'>create quiz</button>
    </div>
  );
}

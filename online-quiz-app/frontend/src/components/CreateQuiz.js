import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuiz } from '../features/userSlice';

export default function CreateQuiz() {
  const [name, setName] = useState('');
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
    console.log(data);
    disp(createQuiz(data));
    console.log('posting quiz')
  }

  return (
    <div className='flex flex-col mt-[60px] justify-center items-center'>
      <h1 className='text-3xl tracking-tighter font-medium my-3 mt-10'>Create an awesome quiz</h1>
      <div className='w-1/2 flex gap-3 items-center justify-center mt-3'>
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
          <div key={questionIndex} className='bg-gray-100 p-5 rounded-md flex flex-col w-1/2'>
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
      <button onClick={handlePostQuiz} className='bg-black rounded-full text-sm tracking-tighter text-white w-1/2 p-2 mb-5'>create quiz</button>
    </div>
  );
}

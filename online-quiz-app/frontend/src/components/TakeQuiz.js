import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function TakeQuiz() {
  const params = useParams();
  const [quiz, setQuiz] = useState({});
  const { id } = params;
  const [opts, setOpts] = useState({});
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const { isLogin } = useSelector(state => state.user);
  const nav = useNavigate();

  useEffect(() => {
    const getQuizById = async () => {
      const res = await fetch(`https://onlinequizapp-60uh.onrender.com/${id}`, {
        headers: {
          "Content-type": "application/json",
          "Authorization": JSON.parse(localStorage.getItem('token'))
        }
      });
      const data = await res.json();
      setQuiz(data);
    };

    getQuizById();
  }, []);

  const handleAnswer = (i, j, data, change, e) => {
    const new_data = { ...data };
    new_data[i] = e.target.value;
    change(new_data);
    // console.log(new_data);
  };

  const handleQuizSubmit = () => {
    let local = 0;
    if (Object.values(opts).some(opt => opt === "")) {
      toast('Please select all options', { position: "bottom-right" });
    } else {
      for (let i = 0; i < quiz.quiz_data?.length; i++) {
        if (quiz.quiz_data[i].quiz_answer === opts[i]) {
          local+=1;
          setScore(local);
        }
      }
      setDone(true);
      setOpts({});
    }
  };

  const handleShare = (txt) => {
    navigator.clipboard.writeText(txt);
    toast('Quiz link copied successfully!!!', { position: "bottom-right", theme: "dark" });
    setDone(false);
    nav('/explore');
  }

  return (
    <div className='mt-[90px] flex flex-col p-5 justify-center items-center'>
      {done ? <div className='flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-50'>
        <div className='bg-white rounded-md p-5 flex justify-center items-center flex-col gap-3 relative'>
          <button className='absolute top-1 right-1' onClick={() => {setDone(false); nav('/explore')}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {score > 8 ? <><h1 className='mt-3 text-2xl font-medium tracking-tight'>Congratulations &#127881;</h1>
            <p className='tracking-tighter text-gray-600 text-md'>you have scored {score} out of {quiz.quiz_data?.length}</p>
            <button onClick={() => handleShare(window.location)} className='text-xs rounded-full p-2 px-4 bg-black text-white'>share this quiz and let others play</button></> : <><h1 className='mt-3 text-2xl font-medium tracking-tight'>You did good &#128533;</h1>
            <p className='tracking-tighter text-gray-600 text-md'>you have scored {score} out of {quiz.quiz_data?.length}</p>
            <p className='tracking-tighter text-sm'>Better Luck Next Time</p></>}
          {isLogin === false && <p className='tracking-tighter text-sm'>Login to save your score</p>}
        </div>
      </div> : ""}
      <h1 className='text-2xl text-light tracking-tighter'>Welcome to, <span className='text-2xl font-medium tracking-tighter'>{quiz?.name}</span ></h1>
      <p className='text-gray-500 text-sm tracking-tighter my-3'>guidance: select options you believe are correct and once selected all answers, submit and view your score.</p>
      <div className='flex flex-col gap-5 lg:w-1/2 sm:w-1/2 mt-5 w-full'>
        {quiz?.quiz_data?.map((el, i) => (
          <div key={i} className='w-full rounded-md bg-gray-100 p-5 gap-5'>
            <h1 className='text-md tracking-tighter font-extralight'>Q{i+1}. {el.quiz_text}</h1>
            <div className='flex flex-col gap-2 mt-3'>
              {el.quiz_options?.map((opt, j) => (
                <div key={j} className='flex justify-start gap-3 items-center'>
                  <input
                    type='radio'
                    name={`question_${i}`}
                    value={opt}
                    onChange={(e) => handleAnswer(i, j, opts, setOpts, e)}
                    checked={opts[i] === opt}
                  />
                  <p className='text-sm tracking-tighter'>{opt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleQuizSubmit} className='bg-black text-white rounded-full text-sm p-2 mt-5 w-1/2'>submit</button>
    </div>
  );
}

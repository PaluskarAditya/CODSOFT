import React from 'react'
import Hero from './components/Hero'
import TopQuiz from './components/TopQuiz'

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center z-10'>
      <Hero />
      <TopQuiz />
    </div>
  )
}

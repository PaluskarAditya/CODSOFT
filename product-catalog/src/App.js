import React, { useEffect } from 'react';
import Products from './components/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  return (
    <div className="z-10 max-[390px]:mt-[650px] h-screen flex justify-center items-center App">
      <Products />
    </div>
  )
}

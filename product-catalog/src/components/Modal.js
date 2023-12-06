import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/cartSlice';

export default function Modal({close}) {
  const { current } = useSelector(state => state.products);
  const [ img, setImg ] = useState(current.thumb);
  const [ qty, setQty ] = useState(1);
  const disp = useDispatch();
  const handleCartAdd = (curr) => {
    const new_prod = {
      id: curr.id,
      title: curr.title,
      desc: curr.desc,
      price: curr.price,
      qty: Number(qty),
      thumb: curr.thumb
    }
    disp(add(new_prod));
    close(false);
  }
  
  return (
    <div className='z-50 bg-black/30 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-10'>
      <div data-aos="zoom-in-up" data-aos-duration="500" className='bg-white relative p-5 shadow-xl shadow-black/20 max-w-[90vw]'>
        <div className='flex justify-between max-[390px]:flex-col items-center gap-5 max-[390px]:mt-[10px]'>
          <div className='flex-1 flex justify-between gap-3'>
            <div className='flex flex-col flex-1 gap-3 max-h-[500px] max-[390px]:max-h-[200px]'>
              <div className='h-[116px] max-[390px]:max-h-[40px]'>
                <img src={current.thumb} onClick={() => setImg(current.thumb)} className='object-cover h-full w-full' />
              </div>
              <div className='h-[116px] max-[390px]:max-h-[40px]'>
                <img src={current.img1} onClick={() => setImg(current.img1)} className='object-cover h-full w-full' />
              </div>
              <div className='h-[116px] max-[390px]:max-h-[40px]'>
                <img src={current.img2} onClick={() => setImg(current.img2)} className='object-cover h-full w-full' />
              </div>
              <div className='h-[116px] max-[390px]:max-h-[40px]'>
                <img src={current.img3} onClick={() => setImg(current.img3)} className='object-cover h-full w-full' />
              </div>
            </div>
            <div className='max-h-[500px] max-[390px]:max-h-[200px] flex-[3]'>
              <img src={img} className='max-h-full min-h-full object-cover' />
            </div>
          </div>
          <div className='flex flex-1 flex-col justify-between items-start'>
            <h1 className='tracking-tighter text-[2.7vw] max-[390px]:text-[10px]'>{current.title}</h1>
            <p className='tracking-tighter text-[1.3vw] max-[390px]:text-[10px]'>{current.desc}</p>
            <div className='flex justify-center items-center my-5 max-[390px]:my-2 gap-3'>
              <p className='text-[1vw] max-[390px]:text-[10px]'>qty</p>
              <input onChange={e => setQty(e.target.value)} type='text' placeholder='enter quantity' className='border border-gray-200 rounded-none max-[390px]:text-[10px] outline-none p-1 px-1 text-[1vw]' />
            </div>
            <button onClick={() => handleCartAdd(current)} className='bg-black text-white w-full max-[390px]:text-xs text-sm p-2'>add to cart</button>
          </div>
        </div>
        <button onClick={() => close(false)} className='absolute top-[7px] right-[7px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

import React from 'react'
import { useDispatch } from 'react-redux';
import { setCurrent } from '../features/productSlice';
import { add } from '../features/cartSlice'
import { AnimatePresence, motion } from 'framer-motion';

export default function Product({ prod, modal, i }) {
  const { title, desc, id, thumb, img1, img2, img3, price } = prod;
  const disp = useDispatch();
  const handleCurrent = (item) => {
    disp(setCurrent(item));
    modal(true);
  }

  console.log(i)

  const handleCartAdd = (el) => {
    const new_prod = {
      id: el.id,
      title: el.title,
      desc: el.desc,
      price: el.price,
      qty: 1,
      thumb: el.thumb
    }
    disp(add(new_prod));
  }

  const fadeVariant = {
    hidden: { opacity: 0, x: 300 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: .99, delay: 0.5 * i }
    }),
  };

  return (
    <AnimatePresence>
      <motion.div variants={fadeVariant}
        initial="hidden"
        animate="visible"
        custom={i} className='flex flex-col shadow-xl shadow-gray-100 relative z-10'>
        <div className='h-full overflow-hidden'>
          <img src={thumb} className='h-full w-full object-cover hover:scale-105 transition' />
        </div>
        <div className='z-10 text-white flex justify-between items-center p-5 py-2 h-[20%] absolute bottom-0 left-0 right-0'>
          <div className='flex flex-col w-1/2'>
            <h1 className='tracking-tight text-[1.1vw] max-[390px]:text-sm'>{title}</h1>
            <p className='text-[1vw] max-[390px]:text-sm'>${price}</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <button onClick={() => handleCartAdd(prod)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:scale-110 transition">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </button>
            <button onClick={() => handleCurrent(prod)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:scale-110 transition">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

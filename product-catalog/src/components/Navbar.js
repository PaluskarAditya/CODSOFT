import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_qty, remove, sub_qty } from '../features/cartSlice';

export default function Navbar() {
  const [width, setWidth] = useState(false);
  const { cart, total, items } = useSelector(state => state.cart);
  const disp = useDispatch();

  return (
    <nav className='z-40 fixed top-0 left-0 right-0 p-5 bg-white/50 backdrop-blur-sm' data-aos="fade-down">
      <div className={`shadow-xl shadow-black/20 fixed top-0 bottom-0 right-0 h-screen z-40 bg-white/90 backdrop-blur-xl overflow-y-auto transition-transform transform w-64 ${width ? '' : 'translate-x-full'} p-5`}>
        <div className='h-full justufy-between items-start flex flex-col'>
          <div className='flex w-full justify-between items-center border-b border-black pb-3'>
            <h1>Cart</h1>
            <button onClick={() => setWidth(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='flex w-full h-full flex-col gap-4 mt-3'>
            {
              cart.length !== 0 ? cart.map(el => <div key={el.id} className='bg-white p-3 shadow-xl shadow-gray-100 flex flex-col'>
                <div className='flex w-full justify-between items-center'>
                  <h1 className='text-xs w-3/4'>{el.title}</h1>
                  <p className='text-xs'>x{el.qty}</p>
                </div>
                <div className='flex gap-3 mt-2'>
                  <button onClick={() => disp(add_qty(el))} className='bg-black p-1 text-white flex-1 text-center flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  </button>
                  <button onClick={() => disp(sub_qty(el))} className='bg-black p-1 text-white flex-1 text-center flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                  </button>
                  <button onClick={() => disp(remove(el))} className='bg-black p-1 text-white flex-1 text-center flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  </button>
                </div>
              </div>) : <h1 className='text-center w-full'>cart empty</h1>
            }
          </div>
            {
              cart.length !== 0 ? <div className='flex flex-col w-full gap-1'>
                <div className='flex justify-between items-center'>
                  <p className='text-xs'>Total: ${total}</p>
                  <p className='text-xs'>x{items}</p>
                </div>
                <button className='text-xs bg-black text-white p-2 w-full'>checkout</button>
              </div> : <></>
            }
        </div>
      </div>
      <ul className='flex justify-between items-center'>
        <li>
          <h1 className='text-[3vw] font-thin'>Product Catalog App</h1>
        </li>
        <li>
          <button onClick={() => setWidth(true)} className='hover:scale-105 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}

import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux';
import { getProds } from '../features/productSlice';
import Modal from './Modal';


export default function Products() {
  const [ prods, setProds ] = useState([]);
  const { all } = useSelector(state => state.products);
  const [ modal, setModal ] = useState(false);
  const disp = useDispatch();

  useEffect(() => {
    disp(getProds());
  }, []);

  useEffect(() => {
    setProds(all);
  }, [all]);

  return (
    <div className='grid lg:grid-cols-4 sm:grid-cols-3 gap-5 p-5 relative' data-aos-delay="700">
      {
        modal ? <Modal close={setModal} /> : ""
      }
      {
        prods.length !== 0 ? prods?.map((el, i ) => <Product key={el.id} i={i} prod={el} modal={setModal} />) : <h1>loading</h1>
      }
    </div>
  )
}

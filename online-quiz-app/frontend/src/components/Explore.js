import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuizes } from '../features/quizSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Explore() {
	const disp = useDispatch();
	const { allquiz } = useSelector(state => state.quiz);
	const [all, setAll] = useState([]);
	const [modal, setModal] = useState(false);
	const [url, setUrl] = useState('');

	useEffect(() => {
		disp(getAllQuizes());
	}, []);

	useEffect(() => {
		setAll(allquiz);
	}, [allquiz]);

	const handleShare = (txt) => {
		navigator.clipboard.writeText(txt);
		setModal(false);
		toast(`quiz link copied successfully`, { position: "bottom-right", theme: "dark" });
	}

	const handleModal = (txt) => {
		setUrl(txt);
		setModal(true);
	}

	return (
		<div id='explore' className='flex flex-col mt-[80px] justify-center items-center'>
			<div className='w-full flex justify-between items-center px-5'>
				<h1 className='text-3xl font-medium tracking-tighter'>Explore</h1>
				<select className='text-sm tracking-tighter font-medium outline-none' defaultChecked="default">
					<option className='text-sm tracking-tighter font-medium' value={'default'}>default</option>
					<option className='text-sm tracking-tighter font-medium' value={'default'}>history</option>
					<option className='text-sm tracking-tighter font-medium' value={'default'}>football</option>
					<option className='text-sm tracking-tighter font-medium' value={'default'}>gk</option>
				</select>
			</div>
			<div className='grid max-[390px]:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
				{
					all?.length !== 0 ? all?.map(el => <div key={el._id} className='flex flex-col border border-gray-200 rounded-md'>
						<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
							<h1 className='text-center font-medium tracking-tight'>{el.name}</h1>
						</div>
						<div className='flex justify-center items-center p-5 w-full py-0 h-full flex-col '>
							<p className='text-sm'>Take this quiz to test your knowledge about it.</p>
							<div className='flex justify-between items-center w-full gap-2 mt-3 mb-2'>
								<Link to={`/explore/${el._id}`}><button className='bg-black text-white text-xs rounded-full p-2 px-4'>take quiz</button></Link>
								<button className='' onClick={() => handleModal(`${window.location}/${el._id}`)}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
										<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
									</svg>
								</button>
								{modal ? <div className='z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/20 backdrop-blur-sm'>
									<div className='rounded-md max-[390px]:w-3/4 lg:w-1/2 bg-white p-5 relative flex justify-center items-center flex-col gap-3'>
										<button className='absolute top-1 right-1' onClick={() => setModal(false)}>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
										<h1 className='text-2xl tracking-tighter font-medium'>Share this Quiz</h1>
										<div className='flex justify-between items-center w-full gap-3'>
											<input disabled className='w-full text-sm rounded-full p-2 px-4 border border-gray-200 outline-none' defaultValue={url} />
											<button onClick={() => handleShare(url)} className='bg-black rounded-full text-white text-sm p-2 px-4'>
												copy
											</button>
										</div>
									</div>
								</div> : ""}
							</div>
						</div>
					</div>) : <h1>Loading</h1>
				}
			</div>
		</div>
	)
}

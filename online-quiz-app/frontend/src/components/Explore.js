import React from 'react'

export default function Explore() {
	return (
		<div className='flex flex-col mt-[60px] justify-center items-center'>
			<div className='w-full flex justify-between items-center px-5'>
				<h1 className='text-3xl font-medium tracking-tighter'>Explore</h1>
				<select className='text-sm tracking-tighter font-medium outline-none' defaultChecked="default">
					<option className='text-sm tracking-tighter font-medium' value={'default'}>default</option>
					<option className='text-sm tracking-tighter font-medium' value={'default'}>history</option>
					<option className='text-sm tracking-tighter font-medium' value={'default'}>football</option>
					<option className='text-sm tracking-tighter font-medium' value={'default'}>gk</option>
				</select>
			</div>
			<div className='grid grid-cols-4 gap-5 p-5'>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>General Knowledge Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your general knowledge.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>Python Language Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test how much python you know.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>History Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your knowledge about history subject.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>Football Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your knowledge about Football.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div><div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>General Knowledge Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your general knowledge.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>Python Language Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test how much python you know.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>History Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your knowledge about history subject.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>Football Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your knowledge about Football.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div><div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>General Knowledge Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your general knowledge.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>Python Language Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test how much python you know.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>History Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your knowledge about history subject.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className='flex flex-col border border-gray-200 rounded-md'>
					<div className='flex justify-center items-center bg-gray-100 p-5 h-[100px]'>
						<h1 className='text-center font-medium tracking-tight'>Football Quizz</h1>
					</div>
					<div className='flex justify-center items-center p-5 h-full'>
						<p className='text-sm'>Take this quiz to test your knowledge about Football.</p>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

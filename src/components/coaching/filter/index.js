import React from 'react'
import {useState} from "react";
import Game from './game'
import SearchIcon from "@mui/icons-material/Search";

const rank = [
	{
		id: 1,
		name: 'Diamond',
		image: '/images/global/rank-diamond.png',
	},
	{
		id: 2,
		name: 'Platinum',
		image: '/images/global/rank-platinum.png',
	},
	{
		id: 3,
		name: 'Gold',
		image: '/images/global/rank-gold.png',
	},
	{
		id: 4,
		name: 'Silver',
		image: '/images/global/rank-silver.png',
	},
	{
		id: 5,
		name: 'Bronze',
		image: '/images/global/rank-bronze.png',
	},
]


export default function filter() {

	const [value, setValue] = useState(50);
	const [thumbWidth, setThumbWidth] = useState(0);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleThumbLoad = (event) => {
		setThumbWidth(event.target.offsetWidth);
	};

	const spanStyle = {
		left: `calc(${(value - 50) / 310 * 100}% + ${thumbWidth / 2}px)`
	};

	return (


		<div className='booster-filter-inner'
			 style={{
				 borderRadius: '3rem',
				 padding: '3.5rem',
				 backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
			 }}
		>
			<h3 className='pb-10 text-2xl booster-filter-title'>Search Booster</h3>
			<div className='booster-filter-search'>
				<div className="w-full relative">
					<label className="block capitalize text-gray-200 text-sm font-bold mb-2"
						   htmlFor="grid-first-name">
						Search Boosters
					</label>
					<input
						className="appearance-none block bg-[#615269] w-full text-gray-200 rounded py-3 px-4 mb-3 placeholder:text-sm placeholder:text-gray-300 leading-tight focus:outline-none"
						id="grid-first-name" type="text" placeholder="Jane"/>
					<span
						className="pointer-events-none absolute inset-y-0 right-0 top-7 grid w-10 place-content-center text-white">
                        <SearchIcon/>
                    </span>
				</div>
			</div>
			<div className='grid grid-cols-12 items-start justify-between pt-5'>
				<div className='booster-filter-select-game col-span-4'>
					<Game/>
				</div>
				<div className='booster-filter-ranked col-span-8'>
					<label className="block capitalize text-gray-200 text-sm font-bold mb-2"
						   htmlFor="grid-first-name">
						Select Rank
					</label>
					<div className="relative">
						<select
							className="block appearance-none text-sm w-full bg-none bg-[#615269] text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
							id="grid-state">
							<option className={`text-sm`}>Type Coach Name</option>
							<option className={`text-sm`}>Missouri</option>
							<option className={`text-sm`}>Texas</option>
						</select>
						<div
							className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
							<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
								 viewBox="0 0 20 20">
								<path
									d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className='pt-5 booster-filter-ranked'>
				<label className="block capitalize text-gray-200 text-sm font-bold mb-2"
					   htmlFor="grid-first-name">
					Select Server
				</label>
				<div className="relative">
					<select
						className="block appearance-none w-full text-sm bg-none bg-[#615269] text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
						id="grid-state">
						<option>Type Coach Name</option>
						<option>Missouri</option>
						<option>Texas</option>
					</select>
					<div
						className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
						<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
							 viewBox="0 0 20 20">
							<path
								d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
						</svg>
					</div>
				</div>
			</div>
			<div className='pt-5 booster-filter-ranked'>
				<label className="block capitalize text-gray-200 text-sm font-bold mb-2"
					   htmlFor="grid-first-name">
					Select Role
				</label>
				<div className="relative">
					<select
						className="block appearance-none w-full bg-none bg-[#615269] text-sm text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
						id="grid-state">
						<option>All Role</option>
						<option>Missouri</option>
						<option>Texas</option>
					</select>
					<div
						className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
						<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
							 viewBox="0 0 20 20">
							<path
								d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
						</svg>
					</div>
				</div>
			</div>
			<div className='pt-5 booster-filter-ranked'>
				<label htmlFor="" className='!text-white !text-sm !font-semibold'>Select Price</label>
				<div className="flex items-center pt-3.5">
					<span className="text-gray-200 text-xs font-bold">50 €</span>
					<div className="relative flex-1 mx-4">
						<input
							type="range"
							min="50"
							max="360"
							step="30"
							value={value}
							onChange={handleChange}
							onLoad={handleThumbLoad}
							className="w-full h-2 bg-gray-300 rounded-full appearance-none"
						/>
						<span
							className="absolute -top-5 left-0 text-[#0075ff]  py-1 !text-xs font-bold text-white rounded-full"
							style={spanStyle}>
          {value} €
        </span>
					</div>
					<span className="text-gray-200 text-xs font-bold">360 €</span>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<a className="group relative inline-flex w-52 mt-10 justify-center items-center overflow-hidden rounded-full bg-[#0d3bff] px-8 py-4 text-whites focus:outline-none focus:ring active:bg-[#0d3bff] active:ring-2 active:ring-[#0d3bff] active:ring-opacity-75"
				   href="/download"><span
					className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4"><svg
					className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span><span
					className="text-sm font-medium transition-all group-hover:mr-4">Uygula</span></a>
			</div>

		</div>

	)
}

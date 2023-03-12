import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai';
import Image from 'next/image';

const listItem = [
	{
		description: "Frinedly with customers",
	},
	{
		description: "Daddy Draven",
	},
	{
		description: "4 years of Boosting",
	},
	{
		description: "Frinedly with customers",
	},
	{
		description: "Daddy Draven",
	},
	{
		description: "4 years of Boosting",
	},
	{
		description: "Frinedly with customers",
	},
	{
		description: "Daddy Draven",
	},
	{
		description: "4 years of Boosting",
	},
	{
		description: "Frinedly with customers",
	},
	{
		description: "Daddy Draven",
	},
	{
		description: "4 years of Boosting",
	},

]

export default function coaching() {

	return (
		<>
			<div className='h-full'>
				<div
					className='px-14 py-10 mb-10 rounded-[28px] h-full coach-card'
					style={{
						backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
					}}>
					<div className='coach-card-inner'>
						<h5 className='text-xl font-bold py-6'>Game Detail</h5>
						<div className="grid grid-cols-2 gap-4 pb-6">
							<div className='space-y-2'>
								<h6 className='uppercase text-xs font-bold'>Game</h6>
								<p className='!text-xs'>League of Legends</p>
							</div>
							<div className='space-y-2'>
								<h6 className='uppercase text-xs font-bold'>Rank</h6>
								<p className='!text-xs'>
									<Image src={'/images/coach/diamond.png'} width={25} height={25} alt='Role'/>
								</p>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4  pb-6">
							<div className='space-y-2'>
								<h6 className='uppercase text-xs font-bold'>server</h6>
								<p className='!text-xs'>EU West</p>
							</div>
							<div className='space-y-2'>
								<h6 className='uppercase text-xs font-bold'>Langues</h6>
								<p className='!text-xs'>English, Turkish</p>
							</div>
						</div>
						<div className="grid grid-cols-2  gap-4  pb-6">
							<div className='space-y-2'>
								<h6 className='uppercase text-xs font-bold'>Role</h6>
								<p className='!text-xs flex items-center gap-2'>
									<Image src={'/images/coach/coach-icon1.png'} width={15} height={15} alt='Role'/>
									<Image src={'/images/coach/coach-icon2.png'} width={15} height={15} alt='Role'/>
								</p>
							</div>
							<div className='space-y-2'>
								<h6 className='uppercase text-xs font-bold'>Coaching</h6>
								<p className='!text-xs'>Yes</p>
							</div>
						</div>
						<h5 className='!text-base font-bold uppercase pt-14 pb-6'>Personal</h5>
						<ul className='grid grid-cols-2 gap-2'>
							{
								listItem.map((item, index) => (
									<li key={index} className='flex items-center gap-2 pb-3'>
										<AiOutlineCheck className='text-green-500'/>
										<p className='!text-sm'>{item.description}</p>
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}


import React from 'react';
import Head from 'next/head';
import Filter from '../../components/coaching/filter';
import CardComponent from '../../components/coaching/card';

export default function coaching() {


	return (
		<>
			<Head>
				<title>Eleboost | Coaching</title>

			</Head>
			<section className='py-32 coaching bg-[url(/images/coach/bg.png)] bg-cover bg-top'>
				<div className="container px-4 mx-auto">
					<h2 className='text-6xl font-bold py-20 text-center custom-shadow'>Coaching</h2>
					<div
						className="flex flex-col items-start justify-center w-full gap-10 px-5 md:px-0 lg:justify-between xl:flex-row">
						<div className='w-full xl:w-1/4 booster-filter'>
							<Filter/>
						</div>
						<div className='w-full xl:w-3/4'>
							<div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
								<CardComponent/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}


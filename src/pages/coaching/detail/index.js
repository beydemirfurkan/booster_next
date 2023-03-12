import React from 'react';
import Head from 'next/head';
import ProfileCard from '../../../components/coaching/coaching-detail/profile-card';
import Detail from '../../../components/coaching/coaching-detail/detail';
import Duration from '../../../components/coaching/coaching-detail/duration-and-tip';
import Feedback from '../../../components/coaching/coaching-detail/feedback';

export default function coaching() {

	return (
		<>
			<Head>
				<title>Eleboost | Coaching Detail</title>

			</Head>
			<section className='py-32 coaching bg-[url(/images/coach/detail/bg.png)] bg-cover bg-top'>
				<div className="container px-4 pt-10 lg:pt-32 mx-auto">
					<div
						className="grid lg:grid-cols-2 2xl:grid-cols-3 place-content-center w-full gap-10 px-5 md:px-0 lg:min-h-[600px]">
						<ProfileCard/>
						<Detail/>
						<Duration/>

					</div>
					<div className='grid grid-cols-1 place-content-center w-full my-10'>
						<Feedback/>
					</div>
				</div>
			</section>
		</>
	)
}




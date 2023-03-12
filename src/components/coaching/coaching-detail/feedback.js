import Image from "next/image";
import React, {useRef, useState} from "react";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Rating from '@mui/material/Rating';

const feedbackData = [
	{
		avatar: "/images/coach/picture.png",
		name: "Mehmet",
		rating: 5,
		rank: '/images/coach/diamond.png',
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed acinia, nisl nisl aliquet nunc, eget aliquam nisl nisl euismod nisl."
	},
	{
		avatar: "/images/coach/picture.png",
		name: "Mehmet",
		rating: 5,
		rank: '/images/coach/diamond.png',
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed acinia, nisl nisl aliquet nunc, eget aliquam nisl nisl euismod nisl."
	},
	{
		avatar: "/images/coach/picture.png",
		name: "Mehmet",
		rating: 5,
		rank: '/images/coach/diamond.png',
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed acinia, nisl nisl aliquet nunc, eget aliquam nisl nisl euismod nisl."
	},
	{
		avatar: "/images/coach/picture.png",
		name: "Mehmet",
		rating: 5,
		rank: '/images/coach/diamond.png',
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed acinia, nisl nisl aliquet nunc, eget aliquam nisl nisl euismod nisl."
	},
	{
		avatar: "/images/coach/picture.png",
		name: "Mehmet",
		rating: 5,
		rank: '/images/coach/diamond.png',
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed acinia, nisl nisl aliquet nunc, eget aliquam nisl nisl euismod nisl."
	},
]

export default function feedback() {
	return (
		<div
			className=' px-14 py-8 rounded-[28px]'
			style={{
				backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
			}}>
			<div className='coach-card-inner'>
				<div className='py-6'>
					<h5 className='text-2xl font-medium'>Müşteri Yorumları</h5>
					<Swiper
						slidesPerView={"auto"}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							640: {
								slidesPerView: "auto",
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 40,
							},
							1400: {
								slidesPerView: 4,
								spaceBetween: 50,
							},
						}}
						modules={[Pagination]}
						className="mySwiper"
					>
						{
							feedbackData.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<div
											className='flex flex-col items-start justify-start space-y-3 py-10 px-4 w-[400px] max-w-full'>
											<div className="feedback-header">
												<Image src={item.avatar} width={50} height={50} alt='Coach Card'
													   className='rounded-full'/>
											</div>
											<div className="feedback-description">
												<p className='py-3 !text-base text-ellipsis overflow-hidden'>{item.comment}</p>
											</div>
											<div className="feedback-footer w-full">
												<Rating name="read-only" value={item.rating} readOnly/>
												<div className="flex items-center justify-between pt-2">
													<h6 className='custom-title font-bold'>{item.name}</h6>
													<div className="rank">
														<Image src={item.rank} width={50} height={50} alt='Role'/>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
				</div>
			</div>
		</div>
	)
}
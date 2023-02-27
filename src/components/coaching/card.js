import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCheck } from 'react-icons/bs';

export default function Card({ platform, rank_image, rank, name, image, features, price }) {
  return (
    <div className='flex flex-col items-center px-14 py-10 mb-10 rounded-[28px] min-h-[600px] coach-card'  style={{
      backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
  }}>
          <div className='coach-card-inner'>
              <div className='flex justify-center gap-3 coach-card-rank-image'>
                  <Image src={platform} width={20} height={20} alt='League of Legends Icon'/>
                  <Image src={rank_image} width={20} height={20} alt='Diamond Rank'/>
              </div>
              <div className='pt-8 coach-card-image'>
                  <Image src={image} width={120} height={120} alt='Coach Card' className='mx-auto'/>
                      <div className='flex items-start justify-center gap-2 py-5 coach-status-and-title'>
                          <div className='coach-status bg-[#10e615] w-5 h-5 rounded-full mt-1'></div>
                          <h3> <span className='text-xl font-bold'>{name}</span> <br/> <span className='text-base italic font-medium text-[#a3a0a5]'>{rank}</span> </h3>
                      </div>
                      <ul className='flex flex-col gap-1 coach-feature'>
                          {features.map((feature, index) => (
                              <li className='flex items-start gap-1' key={index}>
                                  <BsCheck className='pl-1 !text-2xl !text-[#10e615]'/>
                                  <p className='!text-sm m-0 p-0'>{feature}</p>
                              </li>
                          ))}
                      </ul>
                      <div className='flex items-center justify-center gap-3 py-6'>
                          <Image src='/images/coach/coach-icon1.png' width={20} height={20} alt='Coach Icon'/>
                          <Image src='/images/coach/coach-icon2.png' width={20} height={20} alt='Coach Icon'/>
                      </div>
                      <div className='flex items-center justify-center'>
                          <p className='!text-[#ffca01] !text-2xl font-semibold'>€<span>{price}</span><span className='!text-sm'>/hr</span></p>
                      </div>
                      <div className='pt-6'>
                          <Link href='/coaching/james-bond' className='bg-[#ffca01] !text-black font-bold px-10 py-4 rounded-3xl flex justify-center items-center'>
                              Boost Now
                          </Link>
                      </div>

              </div>
          </div>
      </div>
  )
}

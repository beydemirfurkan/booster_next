import Link from 'next/link';
import Image from 'next/image';
import { BsSearch, BsCheck } from 'react-icons/bs';


export default function coaching() {

    const coachesFeature = [
        {
            platform: '/images/global/league-of-legends-icon.png',
            
            image: '/images/coach/picture.png',
            name: 'James Bond',
            rank: 'Diamond',
            features: [
                'Friendly with customers',
                'Dedicated to customers',
                'Good at communication',
            ],
            price: '20',
            
            
        }
    ]

  return (
    <section className='py-32 coaching bg-[url(/images/coach/bg.png)] bg-cover bg-top'>
        <div className="container px-4 py-32 mx-auto">
            <div className="flex items-start justify-between w-full gap-10">
                <div className='w-1/4 booster-filter'>
                        <div clasName='booster-filter-inner'
                        style={{
                            borderRadius: '3rem',
                            padding: '3.5rem',
                            backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
                        }}
                        >
                            <h3 className='pb-10 text-2xl booster-filter-title'>Search Booster</h3>
                            <div className='booster-filter-search'>
                                <div className='flex flex-col gap-2'>
                                    <label className='!text-white text-sm font-semibold'>Search Boosters</label>
                                    <input type='text' className='w-full px-4 py-3 rounded-md bg-[#615269] text-white placeholder:text-gray-200 placeholder:text-sm' placeholder='Type Coach Name'/>
                                </div>
                            </div>
                            <div className='pt-5 booster-filter-ranked'>
                                <label clasName='!text-white !text-sm !font-semibold'> Game </label>
                                    <div className='flex items-center gap-2 pt-3'>
                                        <label htmlFor='' className='bg-[#0b3efd] h-9 w-9 rounded-full flex flex-col items-center justify-center shadow'>
                                            <input type="radio" name="game" value="league-of-legends" className="hidden"/>
                                            <Image src='/images/global/league-of-legends-icon.png' width={20} height={20} alt='League of Legends Icon'/>
                                        </label>
                                        <label htmlFor='' className='bg-[#615269] h-9 w-9 rounded-full flex flex-col items-center justify-center shadow'>
                                            <input type="radio" name="game" value="valorant" className="hidden"/>
                                            <Image src='/images/global/valorant-icon.png' width={20} height={20} alt='Valorant Icon'/>
                                        </label>
                                    </div>
                            </div>
                                
                        </div>
                </div>
                <div className='w-3/4'>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='flex flex-col items-center px-14 py-10 rounded-[28px] h-[600px] coach-card'  style={{
                        backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
                    }}>
                            <div className='coach-card-inner'>
                                <div className='flex justify-center gap-3 coach-card-rank-image'>
                                    <Image src='/images/global/league-of-legends-icon.png' width={20} height={20} alt='League of Legends Icon'/>
                                    <Image src='/images/global/rank-diamond.png' width={20} height={20} alt='Diamond Rank'/>
                                </div>
                                <div className='pt-8 coach-card-image'>
                                    <Image src='/images/coach/picture.png' width={120} height={120} alt='Coach Card' className='mx-auto'/>
                                        <div className='flex items-start justify-center gap-2 py-5 coach-status-and-title'>
                                            <div className='coach-status bg-[#10e615] w-5 h-5 rounded-full mt-1'></div>
                                            <h3> <span className='text-xl font-bold'>James Bond</span> <br/> <span className='text-base italic font-medium text-[#a3a0a5]'>Diamond</span> </h3>
                                        </div>
                                        <ul className='flex flex-col gap-1 coach-feature'>
                                            <li className='flex items-start gap-1'>
                                                <BsCheck className='pl-1 !text-2xl !text-[#10e615]'/>  
                                                <p className='!text-sm m-0 p-0'>Friendly with customers</p>
                                            </li>
                                            <li className='flex items-start gap-1'>
                                                <BsCheck className='pl-1 !text-2xl !text-[#10e615]'/>  
                                                <p className='!text-sm m-0 p-0'>Friendly with customers</p>
                                            </li>
                                            <li className='flex items-start gap-1'>
                                                <BsCheck className='pl-1 !text-2xl !text-[#10e615]'/>  
                                                <p className='!text-sm m-0 p-0'>Friendly with customers</p>
                                            </li>
                                        </ul>
                                        <div className='flex items-center justify-center gap-3 py-6'>
                                            <Image src='/images/coach/coach-icon1.png' width={20} height={20} alt='Coach Icon'/>
                                            <Image src='/images/coach/coach-icon2.png' width={20} height={20} alt='Coach Icon'/>
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <p className='!text-[#ffca01] !text-2xl font-semibold'>€<span>50.00</span><span className='!text-sm'>/hr</span></p>
                                        </div>
                                        <div className='pt-6'>
                                            <Link href='/coaching/james-bond' className='bg-[#ffca01] !text-black font-bold px-10 py-4 rounded-3xl flex justify-center items-center'>
                                                Boost Now
                                            </Link>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

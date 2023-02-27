import React from 'react'
import Image from 'next/image'

export default function filter() {
  return (
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
  )
}

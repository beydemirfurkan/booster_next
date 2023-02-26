import Link from 'next/link';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';


export default function coaching() {
  return (
    <section className='py-32 coaching'>
        <div className="container px-4 py-32 mx-auto">
            {/* Search Boosters */}
            <div className="flex items-start justify-start w-full">
                <div className='w-1/4 booster-filter'>
                        <div clasName='booster-filter-inner'
                        style={{
                            padding: '20px',
                            borderRadius: '44px',
                            backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
                        }}
                        >
                            <h3 className='booster-filter-title'>Search Booster</h3>
                            <div className='booster-filter-search'>
                            <div className='flex flex-col gap-2'>
                                <label className='!text-white text-sm font-semibold'>Adınız</label>
                                <input type='text' className='w-full px-4 py-3 rounded-md bg-[#615269] text-white'/>
                            </div>
                            </div>
                                
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

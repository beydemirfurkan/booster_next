import Link from 'next/link';
import Image from 'next/image';
import { CgArrowLongRight } from 'react-icons/cg';


export default function orderComplete() {
  return (
            <section className='order-complete' style={{
        backgroundImage: "url('/images/order-complete/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
            }}>
        <div className="container px-4 mx-auto py-28">
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <div>
                    <Image src='/images/order-complete/check.png' className='mx-auto' width={200} height={200} />
                    <h2 className='py-5 text-6xl custom-shadow'>Siparişin Oluşturuldu</h2>
                </div>
                <div>
                    <p className='!text-xl font-bold pb-2'>Sizinle hızlıca irtibata geçeceğiz</p>
                    <p style={{fontSize: '15px!important', lineHeight: '1.3!important'}}>We have the best boosters available in the industry <br/> ready to take your game to the next level.</p>
                </div>
                <div className='flex items-center gap-3 pt-10'>
                        <Image src='/images/order-complete/rank1.png' width={40} height={40} />
                        <CgArrowLongRight/>
                        <Image src='/images/order-complete/rank2.png' width={40} height={40} />
                </div>
                <p className='py-3 !text-sm'>Leauge of Legends Boost <br/> Bronzei 50LP to Diamond4 DLP</p>
                <Link href='/'>
                <Image src='/images/order-complete/discord.png' width={130} height={30}></Image></Link>
            </div>
            <div className='order-complete-step pt-28'>
                <div className='text-center'>
                    <p className="pb-2 !text-sm font-semibold uppercase tracking-px">game boost</p>
                    <h3 className="pb-10 text-4xl custom-shadow">Premium LoL Boosting Features</h3>
                </div>
                <div className='grid gap-10 px-10 md:gap-20 md:grid-cols-3'>
                <div className='flex flex-col items-start gap-4 py-10 step-item'>
                    <Image src='/images/order-complete/step1.png' width={140} height={140} />
                    <h4 className='text-2xl font-bold'>Trusted</h4>
                    <p className='max-w-sm text-sm lg:max-w-xs'>We have the best boosters available in the industry ready to take your game to the next level.</p>
                </div>
                <div className='flex flex-col items-start gap-4 py-10 step-item'>
                    <Image src='/images/order-complete/step2.png' width={140} height={140} />
                    <h4 className='text-2xl font-bold'>Experienced</h4>
                    <p className='max-w-sm text-sm lg:max-w-xs'>We have the best boosters available in the industry ready to take your game to the next level.</p>
                </div>
                <div className='flex flex-col items-start gap-4 py-10 step-item'>
                    <Image src='/images/order-complete/step3.png' width={140} height={140} />
                    <h4 className='text-2xl font-bold !text-white'>Friendly</h4>
                    <p className='max-w-sm text-sm lg:max-w-xs'>We have the best boosters available in the industry ready to take your game to the next level.</p>
                </div>
                </div>

            </div>
            
        </div>
    </section>

  )
}

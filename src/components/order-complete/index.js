import Link from 'next/link';
import Image from 'next/image';
import OrderStepItem from './order-step-item';
import {CgArrowLongRight} from 'react-icons/cg';

export default function orderCompleted() {
    return (
        <section className='order-complete bg-[url(/images/order-complete/bg.png)] bg-no-repeat bg-center bg-cover'>
            <div className="container px-4 mx-auto py-28">
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    <div>
                        <Image src='/images/order-complete/check.png' className='mx-auto' width={200} height={200}/>
                        <h2 className='py-5 text-6xl custom-shadow'>Siparişin Oluşturuldu</h2>
                    </div>
                    <div>
                        <p className='!text-xl font-bold pb-2'>Sizinle hızlıca irtibata geçeceğiz</p>
                        <p style={{fontSize: '15px!important', lineHeight: '1.3!important'}}>We have the best boosters
                            available in the industry <br/> ready to take your game to the next level.</p>
                    </div>
                    <div className='flex items-center gap-3 pt-10'>
                        <Image src='/images/order-complete/rank1.png' width={40} height={40}/>
                        <CgArrowLongRight/>
                        <Image src='/images/order-complete/rank2.png' width={40} height={40}/>
                    </div>
                    <p className='py-3 !text-sm'>Leauge of Legends Boost <br/> Bronzei 50LP to Diamond4 DLP</p>
                    <Link href='/'>
                        <Image src='/images/order-complete/discord.png' width={130} height={30}></Image></Link>
                </div>
                <div className='order-complete-step pt-28'>
                    <OrderStepItem/>
                </div>

            </div>
        </section>

    )
}

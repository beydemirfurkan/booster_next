import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { BsSearch, BsCheck } from 'react-icons/bs';
import Card from '../../components/coaching/card';
import Filter from '../../components/coaching/filter';


export default function coaching() {

    const coachesFeature = [
        {
            platform: '/images/global/league-of-legends-icon.png',
            rank_image: '/images/global/rank-diamond.png',
            rank: 'Diamond',
            name: 'James Bond',
            image: '/images/coach/picture.png',
            features: [
                'Friendly with customers',
                'Dedicated to customers',
                'Good at communication',
            ],
            price: '20',
        },
        {
            platform: '/images/global/league-of-legends-icon.png',
            rank_image: '/images/global/rank-diamond.png',
            rank: 'Diamond',
            name: 'James Bond',
            image: '/images/coach/picture.png',
            features: [
                'Friendly with customers',
                'Dedicated to customers',
                'Good at communication',
            ],
            price: '20',
        },
        {
            platform: '/images/global/league-of-legends-icon.png',
            rank_image: '/images/global/rank-diamond.png',
            rank: 'Diamond',
            name: 'James Bond',
            image: '/images/coach/picture.png',
            features: [
                'Friendly with customers',
                'Dedicated to customers',
                'Good at communication',
            ],
            price: '20',
        },
        {
            platform: '/images/global/league-of-legends-icon.png',
            rank_image: '/images/global/rank-diamond.png',
            rank: 'Diamond',
            name: 'James Bond',
            image: '/images/coach/picture.png',
            features: [
                'Friendly with customers',
                'Dedicated to customers',
                'Good at communication',
            ],
            price: '20',
        },
    ]

  return (
    <>
    <Head>
        <title>Eleboost | Coaching</title>
    </Head>
        <section className='py-32 coaching bg-[url(/images/coach/bg.png)] bg-cover bg-top'>
        <div className="container px-4 pt-32 mx-auto">
            <div className="flex flex-col items-start justify-center w-full gap-10 px-5 md:px-0 lg:justify-between lg:flex-row">
                <div className='w-full lg:w-1/4 booster-filter'>
                    <Filter/>
                </div>
                <div className='w-full lg:w-3/4'>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
                        {
                            coachesFeature.map((coach, index) => {
                                return (
                                    <Card
                                        key={index}
                                        platform={coach.platform}
                                        rank_image={coach.rank_image}
                                        rank={coach.rank}
                                        name={coach.name}
                                        image={coach.image}
                                        features={coach.features}
                                        price={coach.price}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

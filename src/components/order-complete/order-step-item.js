import Image from 'next/image';

const stepData = [
    {
        image: '/images/order-complete/step1.png',
        title: 'Trusted',
        description: 'We have the best boosters available in the industry ready to take your game to the next level.'
    },
    {
        image: '/images/order-complete/step2.png',
        title: 'Experienced',
        description: 'We have the best boosters available in the industry ready to take your game to the next level.'
    },
    {
        image: '/images/order-complete/step3.png',
        title: 'Friendly',
        description: 'We have the best boosters available in the industry ready to take your game to the next level.'
    }
]

export default function orderCompleteItem() {
    return (

        <>
            <div className='text-center'>
                <p className="pb-2 !text-sm font-semibold uppercase tracking-px">game boost</p>
                <h3 className="pb-10 text-4xl custom-shadow">Premium LoL Boosting Features</h3>
            </div>
            <div className='grid gap-10 px-10 md:gap-20 md:grid-cols-3'>
                {
                    stepData.map((item, idx) => {
                        return (
                            <div className='flex flex-col items-start gap-4 py-10 step-item' key={idx}>
                                <Image src={item.image} width={140} height={140}/>
                                <h4 className='text-2xl font-bold'>{item.title}</h4>
                                <p className='max-w-sm text-sm lg:max-w-xs'>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>


    )
}

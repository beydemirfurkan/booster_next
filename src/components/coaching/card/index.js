import React from "react";
import Card from './card';

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
];
const MemoizedCard = React.memo(Card);
export default function Index() {
    return (
        <>
            {
                coachesFeature.map((coach, index) => {
                    return (
                        <MemoizedCard
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
        </>
    )
}
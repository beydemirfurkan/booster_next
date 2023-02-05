import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function HeroBottom() {

    const slideData = [
        {
            id: 1,
            price: "78,340",
            image: "/images/home/boost-item1.png",
            description: "Completed Orders"
        },
        {
            id: 2,
            price: "1,501",
            image: "/images/home/boost-item2.png",
            description: "Happy Customers"
        },
        {
            id: 3,
            price: "1,501",
            image: "/images/home/boost-item3.png",
            description: "Completed Orders"
        },
    ]


  return (
    <section className="hero-bottom py-40">
      <div className="container relative z-10 mx-auto px-5">
        <div className="grid w-full grid-cols-12 gap-4 items-center">
          <div className="col-span-12 lg:col-span-4">
            <span className="uppercase text-sm font-bold text-customGray">game boost</span>
            <h2 className="pt-2 text-5xl">
              What we've <br/> achieved so far
            </h2>
            <p className="w-full md:w-2/3 py-10">
              Get incredible win rates and start gaining RR quicker by playing
              with our Radiant ELO boosters.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper-container"
            >
                {slideData.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <Image src={item.image} width={250} height={250} alt="Boost Item"></Image>
                                 <h3 className="text-white text-3xl font-semibold">{item.price}</h3>
                                 <p>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

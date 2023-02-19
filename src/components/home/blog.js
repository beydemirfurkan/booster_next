import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

export default function blog() {

  const slideData = [
    {
      link: '/',
      image: '/images/blog/game1.png',
      title: 'Legends Premium',
      description: {
        category: 'lol',
        rank: 'lvl',
        price: '€3.00',
        date: '02.08.2022',
      }
    },
    
    {
      link: '/',
      image: '/images/blog/game2.png',
      title: 'Legends Premium',
      description: {
        category: 'lol',
        rank: 'lvl',
        price: '€3.00',
        date: '02.08.2022',
      }
    },
    
    {
      link: '/',
      image: '/images/blog/game3.png',
      title: 'Legends Premium',
      description: {
        category: 'lol',
        rank: 'lvl',
        price: '€3.00',
        date: '02.08.2022',
      }
    },
    
    {
      link: '/',
      image: '/images/blog/game1.png',
      title: 'Legends Premium',
      description: {
        category: 'lol',
        rank: 'lvl',
        price: '€3.00',
        date: '02.08.2022',
      }
    },
    
    {
      link: '/',
      image: '/images/blog/game1.png',
      title: 'Legends Premium',
      description: {
        category: 'lol',
        rank: 'lvl',
        price: '€3.00',
        date: '02.08.2022',
      }
    },
    
  ]

  return (
    <section className="py-40 blog bg-[url('/images/home/bg-lol.png')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4 mx-auto">
        <div className="mb-10 md:mb-16">
          <p className="!text-sm font-bold uppercase text-customGray text-center">
            blog
          </p>
          <h2 className="mb-16 text-3xl font-bold leading-none text-center md:text-4xl xl:text-5xl font-heading tracking-px-n custom-title custom-shadow">
            Read our League of Legends <br />
            boosting news.
          </h2>
        </div>
        <Swiper 
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: "auto",
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiper-container"
        >
      {
        slideData.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
              <figure className="flex flex-col items-center justify-center mx-auto gaming-item">
                <Link className='w-full' href='/blog'>
                <Image src={slide.image} 
                          alt="Blog Image"  
                          width={360}
                          height={300}                      
                          objectFit="cover"
                          objectPosition="center"/>
                </Link>

                  <figcaption className='w-full px-5 py-3'>
                    <p className="!text-white font-semibold text-ellipsis">{slide.title}</p>
                    <span className="block py-1 text-sm text-gray-400 ">{slide.description.category} . {slide.description.rank} . {slide.description.price} . {slide.description.date}</span>
                    <div className="flex py-2">
                        <Image src={'/images/global/war-icon.png'} alt="War Icon" width={20} height={20}/>
                        <Image src={'/images/global/diamond-icon.png'} alt="Dıamond Icon" width={20} height={20} className='ml-2'/>
                    </div>
                  </figcaption>
              </figure>
          </SwiperSlide>
        ))
        
      }
        </Swiper>
        {/* <Image src='/images/home/fire-flames-bg.png' width={500} height={600} alt='Flames Bg'/> */}
      </div>
    </section>
  );
}

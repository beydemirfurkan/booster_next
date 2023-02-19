import Image from "next/image";
import Link from "next/link";



export default function Services() {


  return (
    <section className="pt-20 pb-52 hero-bottom bg-[url('/images/home/services-bg.png')] bg-cover bg-center home-services">
      <div className="container relative z-10 px-5 mx-auto">
          <div className='text-center'>
            <p className="!text-sm font-bold uppercase text-customGray">game boost</p>
            <h2 className="pb-3 text-5xl font-bold text-white custom-shadow">Hizmetler</h2>
            <p className="pb-4 !text-gray-400 !text-sm">Get incredible win rates and start gaining RR quicker by playing.</p>
          </div>
         
          <div className='flex flex-wrap items-center justify-center gap-10 text-center lg:mr-12'>
            <div className='flex flex-col items-center justify-center'>
              <Image src={'/images/home/coaching-service.png'} width={400} height={200} alt='coaching service' />
              <div className='max-w-sm lg:max-w-xs'>
                <h3 className='text-3xl coaching-item'>Coaching</h3>
                <p className='pb-4 !text-gray-200 font-bold !text-sm custom-shadow'>Services</p>
                <p className='!text-gray-400 !text-base pb-8'>Boosters at Eloking are incredible human beings - exceptional skills in League of Legends, Challenger ranks, friendly and professional. You won’t find a better mix of characteristics anywhere else.</p>
                <Link href='/coaching' className='inline-block px-12 py-3.5 text-sm font-medium text-white transition-all bg-[#0d3bff] rounded-full hover:scale-110 hover:shadow-xl focus:outline-none focus:ring  shadow-[0_10px_60px_-15px_rgba(13,59,255,0.8)]'>View Coach</Link>
              </div>
              </div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={'/images/home/eleboost-service.png'} width={400} height={200} alt='coaching service' />
              <div className='max-w-sm lg:max-w-xs'>
                <h3 className='text-3xl eloboosting-item' >EloBoosting</h3>
                <p className='pb-4 !text-gray-200 !text-sm font-bold custom-shadow '>Services</p>
                <p className='!text-gray-400 !text-base pb-8'>Boosters at Eloking are incredible human beings - exceptional skills in League of Legends, Challenger ranks, friendly and professional. You won’t find a better mix of characteristics anywhere else.</p>
                <Link href='/coaching' className='inline-block px-12 py-3.5 text-sm font-medium text-white transition-all bg-[#41de2a] rounded-full hover:scale-110 hover:shadow-xl focus:outline-none focus:ring  shadow-[0_10px_60px_-15px_rgba(13,59,255,0.8)]'>View Boosters</Link>
              </div>
              </div>
          </div>
      </div>
    </section>
  );
}


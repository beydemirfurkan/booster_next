import Image from 'next/image'
import Link from 'next/link'

export default function Hero () {
  return (
    <section className="hero min-h-screen h-screen py-4">
        <Image src="/images/home/hero.png" className="absolute top-0 left-0 right-0 -z-10 h-screen min-h-screen object-cover" width={1920} height={780} alt="Hero Image"></Image>
        <div className="container h-full relative z-10 mx-auto px-5">
            <div className="flex flex-col justify-center h-full w-full md:w-2/3 xl:w-2/5">
                <h1 className="text-5xl md:text-6xl font-bold ">Buy<span className=" text-blue-700" style={{textShadow: '#172152 10px 0 10px'}}> Leauge of Legends & Valorant </span>boosting!</h1>
                <p className="w-full md:w-2/3 py-10">Get incredible win rates and start gaining RR quicker by playing with our Radiant ELO boosters.</p>
                  <Link href="" className="btn-main">Select Boosters</Link>
            </div>  
        </div>
    </section>
  )
}


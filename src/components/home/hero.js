import Image from 'next/image'
import Link from 'next/link'

export default function Hero () {
  return (
    <section className="hero h-screen">
        <Image src="/images/home/hero.png" className="absolute top-0 left-0 right-0 -z-10" width={1920} height={780} alt="Hero Image"></Image>
        <div className="container h-full relative z-10 mx-auto">
            <div className="flex flex-col justify-center h-full w-1/3">
                <h1 className="text-6xl font-semibold">Buy<span> Leauge of Legends & Valorant </span>boosting</h1>
                <p className="w-2/3 py-10">Get incredible win rates and start gaining RR quicker by playing with our Radiant ELO boosters.</p>
                <div className="button main  bg-blue w-60 h-16 flex justify-center items-center py-3 rounded-full">
                  <Link href="" className="text-white font-semibold text-sm">Select Boosters</Link>
                </div>
            </div>  
        </div>
    </section>
  )
}


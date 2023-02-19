import Image from 'next/image'
import Link from 'next/link'

export default function Hero () {
  return (
    <section className="h-screen min-h-screen py-4 hero">
        <Image src="/images/home/hero2.png" className="absolute top-0 left-0 right-0 z-10 object-cover h-screen min-h-screen" width={1920} height={780} alt="Hero Image"></Image>
        <div className="container relative z-10 h-full px-5 mx-auto">
            <div className="flex flex-col justify-center w-full h-full md:w-2/3 xl:w-2/5">
                <h1 className="pb-3 text-5xl md:text-6xl custom-title">Buy<span> Leauge of Legends & Valorant </span>boosting!</h1>
                <p className="w-full py-6 md:w-2/3">Get incredible win rates and start gaining RR quicker by playing with our Radiant ELO boosters.</p>
                <Link
                className="group relative inline-flex w-52 justify-center items-center overflow-hidden rounded-full bg-[#0d3bff] px-8 py-4 text-whites focus:outline-none focus:ring active:bg-[#0d3bff] active:ring-2 active:ring-[#0d3bff] active:ring-opacity-75"
                href="/download"
              >
                <span
                  className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:mr-4">
                  Select Boosters
                </span>
              </Link>
            </div>  
        </div>
    </section>
  )
}


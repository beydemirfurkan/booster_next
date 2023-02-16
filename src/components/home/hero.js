import Image from 'next/image'
import Link from 'next/link'

export default function Hero () {
  return (
    <section className="hero min-h-screen h-screen py-4">
        <Image src="/images/home/hero.png" className="absolute top-0 left-0 right-0 z-10 h-screen min-h-screen object-cover" width={1920} height={780} alt="Hero Image"></Image>
        <div className="container h-full relative z-10 mx-auto px-5">
            <div className="flex flex-col justify-center h-full w-full md:w-2/3 xl:w-2/5">
                <h1 className="text-5xl md:text-6xl font-bold custom-title ">Buy<span className=" text-blue-700" style={{textShadow: '#172152 10px 0 10px'}}> Leauge of Legends & Valorant </span>boosting!</h1>
                <p className="w-full md:w-2/3 py-10">Get incredible win rates and start gaining RR quicker by playing with our Radiant ELO boosters.</p>
                <Link
                class="group relative inline-flex w-52 justify-center items-center overflow-hidden rounded-full bg-[#0d3bff] px-8 py-4 text-whites focus:outline-none focus:ring active:bg-[#0d3bff] active:ring-2 active:ring-[#0d3bff] active:ring-opacity-75"
                href="/download"
              >
                <span
                  class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
                >
                  <svg
                    class="h-5 w-5"
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

                <span class="text-sm font-medium transition-all group-hover:mr-4">
                  Select Boosters
                </span>
              </Link>
            </div>  
        </div>
    </section>
  )
}


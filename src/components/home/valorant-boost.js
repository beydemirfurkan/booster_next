import Link from "next/link";

export default function valorantBoost () {
  return (
    <section className="valorant-bost py-80 bg-[url('/images/home/valor.png')] bg-cover">
        <div className="container relative z-10 px-12 mx-auto">
            <div className="grid w-full grid-cols-12 gap-4 place-items-center">
                <div className="col-span-12 lg:col-span-7"></div>
                <div className="flex flex-col col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-4">
                <p className="pb-2 !text-sm font-semibold uppercase tracking-px">
                        game boost
                    </p>
                    <h2 className="pt-2 text-5xl custom-shadow2">Valorant hızlı <br /> Boost</h2>
                    <p className="py-6">
                    Boosters at Eloking are incredible human beings - exceptional skills in League of Legends, Challenger ranks, friendly and professional. You won’t find a better mix of characteristics anywhere else.
                    </p>
                    <p className="pb-8">
                    Boosters at Eloking are incredible human beings  exceptional skills in League of Legends, Challenger
                    </p>
                    <div className="my-3">
                    <Link href='/coaching' className='inline-block px-12 py-4 text-sm font-medium text-white transition-all bg-[#c18514] rounded-full hover:scale-110 hover:shadow-xl focus:outline-none focus:ring shadow-[0_10px_60px_-15px_rgba(193,133,20,0.8)]'>Valorant Booster List</Link>
                    </div>
                </div>
                </div>
            </div>
    </section>
                
  )
}


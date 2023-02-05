import Link from "next/link";

export default function valorantBoost () {
  return (
    <section className="valorant-bost py-80 bg-[url('/images/home/bg-valorant.png')] bg-cover">
        <div className="container relative z-10 mx-auto px-5">
            <div className="grid w-full grid-cols-12 gap-4 place-items-center">
                <div className="col-span-12 lg:col-span-7"></div>
                <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col">
                    <span className="uppercase text-sm font-bold text-customGray">
                        game boost
                    </span>
                    <h2 className="pt-2 text-5xl">Valorant hızlı <br /> Boost</h2>
                    <p className="py-10">
                    Boosters at Eloking are incredible human beings - exceptional skills in League of Legends, Challenger ranks, friendly and professional. You won’t find a better mix of characteristics anywhere else.
                    </p>
                    <div className="my-3">  
                        <Link href="/boosting" className="btn-main-2">Valorant Boosters List</Link>
                    </div>
                </div>
                </div>
            </div>
    </section>
                
  )
}

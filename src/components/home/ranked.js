import Link from "next/link";
import Image from "next/image";

export default function Ranked() {
    return (
        <section className="ranked pb-40 pt-20 bg-bottom bg-[url('/images/home/bg-star.png')] bg-cover">
            <div className="container relative z-10 px-12 mx-auto ">
                <div className="grid w-full grid-cols-12 gap-4 place-items-center">
                    <div className="col-span-12 lg:col-span-7">
                        <Image src="/images/home/rank.png" width={800} height={800} alt="Ranked"></Image>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <div className="flex flex-col w-full max-w-md lg:mr-12">
                            <p className="pb-2 !text-sm font-semibold uppercase tracking-px">
                                game boost
                            </p>
                            <h2 className="pt-2 text-5xl custom-shadow">What we've <br/> achieved so far</h2>
                            <p className="py-6">
                                Boosters at Eloking are incredible human beings - exceptional skills in League of
                                Legends, Challenger ranks, friendly and professional. You won’t find a better mix of
                                characteristics anywhere else.
                            </p>
                            <p className="pb-8">
                                Boosters at Eloking are incredible human beings exceptional skills in League of Legends,
                                Challenger
                            </p>
                            <div className="my-3">
                                <Link href='/coaching'
                                      className='inline-block px-12 py-3.5 text-sm font-medium text-white transition-all bg-[#0d3bff] rounded-full hover:scale-110 hover:shadow-xl focus:outline-none focus:ring  shadow-[0_10px_60px_-15px_rgba(13,59,255,0.8)]'>Select
                                    Boosters</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

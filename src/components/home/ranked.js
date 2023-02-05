import Link from "next/link";
import Image from "next/image";

export default function Ranked() {
  return (
    <section className="ranked py-40 bg-[url('/images/home/bg-star.png')] bg-cover">
      <div className="container relative z-10 mx-auto px-5">
        <div className="grid w-full grid-cols-12 gap-4 place-items-center">
          <div className="col-span-12 lg:col-span-7">
            <Image src="/images/home/rank.png" width={800} height={800} alt="Ranked"></Image>
          </div>
          <div className="col-span-12 lg:col-span-5">
          <div className="flex flex-col w-full">
            <span className="uppercase text-sm font-bold text-customGray">
                game boost
              </span>
              <h2 className="pt-2 text-5xl">What we've <br /> achieved so far</h2>
              <p className="py-10">
              Boosters at Eloking are incredible human beings - exceptional skills in League of Legends, Challenger ranks, friendly and professional. You won’t find a better mix of characteristics anywhere else.
              </p>
              <p className="pb-10">
              Boosters at Eloking are incredible human beings  exceptional skills in League of Legends, Challenger
              </p>
              <div className="my-3">
                  <Link href="/boosting" className="btn-main">Select Boosters</Link>
              </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Ranked2() {
  return (
    <section className="coaching py-12 ">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex flex-wrap justify-evenly items-center w-full">
          <div className="md:w-5/12 lg:w-4/12 order-first">
            <span className="uppercase text-sm font-bold">game boost</span>
            <h2 className="pt-2 text-5xl">
              Boosting-And <br /> Coaching Services
            </h2>
            <p className="py-10">
              Boosters at Eloking are incredible human beings - exceptional
              skills in League of Legends, Challenger ranks, friendly and
              professional. You won’t find a better mix of characteristics
              anywhere else.
            </p>
          </div>
          <div className="md:w-6/12 lg:w-5/12 order-last">
            <div className="text-center">
              <Image
                src="/images/home/rank-2.png"
                width={600}
                height={600}
                alt="Coaching"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

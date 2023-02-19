import Image from "next/image";

export default function Vpn() {
  return (
    <section className="py-12 coaching">
      <div className="container px-5 mx-auto md:px-0">
        <div className="flex flex-wrap items-center w-full justify-evenly">
          <div className="order-last md:w-6/12 lg:w-5/12 md:order-first">
            <div className="text-center">
              <Image
                src="/images/home/vpn.png"
                width={600}
                height={600}
                alt="Coaching"
              ></Image>
            </div>
          </div>
          <div className="order-first max-w-md md:w-5/12 lg:w-4/12 md:order-last">
            <p className="pb-2 !text-sm font-semibold uppercase tracking-px ">game boost</p>
            <h2 className="pt-2 text-5xl">
              VPN ile <br /> Güvenilir Hizmet
            </h2>
            <p className="pt-6 pb-10">
              Boosters at Eloking are incredible human beings - exceptional
              skills in League of Legends, Challenger ranks, friendly and
              professional. You won’t find a better mix of characteristics
              anywhere else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
}

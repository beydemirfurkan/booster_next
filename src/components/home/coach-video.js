import Link from "next/link";
import Image from "next/image";

export default function Ranked() {
	return (
		<section className="ranked pb-52 pt-10 relative">
			<Image src="/images/home/coach-video-bg.png" width={1200} height={500} alt="Ranked"
				   className='absolute top-0 right-0 hidden lg:block'></Image>
			<div className="container relative z-10 px-12 mx-auto ">
				<div className="grid w-full grid-cols-12 gap-4 place-items-center">
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
						</div>
					</div>
					<div className="col-span-12 lg:col-span-7">
						<Image src="/images/home/coach-video.png" width={660} height={500} alt="Ranked"></Image>
					</div>

				</div>
			</div>
		</section>
	);
}

import Image from "next/image";

export default function Card() {

	return (
		<>
			<div className='h-full'>
				<div
					className='flex flex-col items-center px-14 py-10 mb-10 rounded-[28px] h-full coach-card'
					style={{
						backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
					}}>
					<div className='coach-card-inner relative max-w-full'>
						<div className='pt-8 coach-card-image'>
							<Image src='/images/coach/picture.png' width={180} height={180} alt='Coach Card'
								   className='mx-auto'/>
							<div
								className='flex flex-col items-start justify-center gap-2 py-5 coach-status-and-title'>
								<h3 className='custom-title pt-2 text-5xl custom-shadow font-bold break-all'>James
									Bond</h3>
								<h4 className='text-base font-medium uppercase'>boosters, coach</h4>
							</div>

							<div className='py-6'>
								<h5 className='text-lg font-medium'>About</h5>
								<p className='py-2 max-h-[200px] text-ellipsis overflow-hidden'>
									Happy new year and new season everyone I'll be only doing duo q orders
									early, I'll start doing solo orders after 1 or 2 months, I'll be
									focusing NA low elo duo early due to long break I had since season end
									so feel free to assign me your placement or rank Happy new year and new season

								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


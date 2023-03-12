import React from 'react';
import Link from 'next/link';

export default function Tip() {

	return (
		<>
			<div className='lg:h-full'>
				<div
					className='px-14 py-10 mb-10 rounded-[28px] h-full coach-card'
					style={{
						backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
					}}>
					<div className='coach-card-inner text-center'>
						<h5 className='text-xl font-bold pt-5'>Tip</h5>
						<p className='!text-base py-3'>Yazı yazılacak, yazı alanı yazılacak</p>
						<div class="w-full relative text-start flex items-end gap-5 pt-4">
							<div>
								<label
									className="block capitalize text-gray-200 text-sm font-bold mb-2"
									htmlFor="grid-first-name">Fiyat Belirle</label>
								<input
									className="appearance-none block bg-[#615269] w-full text-gray-200 rounded py-3 px-4 placeholder:text-sm placeholder:text-gray-300 leading-tight focus:outline-none"
									id="tip" type="number" placeholder="€"/>
							</div>

							<Link
								className="inline-block py-4 w-full flex justify-center items-center text-sm font-medium text-white transition-all bg-[#0d3bff] rounded-lg hover:scale-110 hover:shadow-xl focus:outline-none focus:ring  shadow-[0_10px_60px_-15px_rgba(13,59,255,0.8)]"
								href="/coaching">Tip Now</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


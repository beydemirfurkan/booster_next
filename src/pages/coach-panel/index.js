import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TabTable from '../../components/coach-panel';

export default function coaching() {

	return (
		<>
			<Head>
				<title>Eleboost | Coaching Panel</title>

			</Head>
			<section className='py-32 coaching bg-[url(/images/panel/bg.png)] min-h-screen bg-cover bg-top'>
				<div className="container px-4 mx-auto pt-32">
					<div className="avatar flex justify-start gap-10">
						{/*file input*/}
						<div className="avatar-upload">
							<div className="avatar-edit">
								<input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" hidden={true}/>
								<label htmlFor="imageUpload">
									<div className="avatar-preview">
										<div id="imagePreview" className='w-48 h-48 rounded-full bg-cover bg-center'
											 style={{backgroundImage: "url('/images/coach/detail/avatar.png')"}}/>
									</div>
								</label>

							</div>
						</div>
						<div className="flex flex-col items-start justify-center">
							<p className="player-name uppercase pb-1 !text-base">player55</p>
							<h3 className="player-profile custom-shadow text-6xl custom-title">Profil</h3>
							<div className="platform-and-rank flex items-center gap-4 pt-3">
								<div className="platform flex items-center gap-2">
									<Image src="/images/panel/dc.png" width={20} height={20} alt='Icon'/>
									<Image src="/images/panel/lol.png" width={20} height={20} alt='Icon'/>
								</div>
								<div className="rank flex items-center gap-2">
									<div
										className="booster px-3 py-2 text-white bg-[#2a85e1] font-bold rounded !text-xs">Booster
									</div>
									<div
										className="booster px-3 py-2 text-white bg-[#d3bb1c] font-bold rounded !text-xs">Coach
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="player-info flex flex-col items-start justify-center gap-10 pt-10">
						<TabTable/>
					</div>
				</div>
			</section>
		</>
	)
}




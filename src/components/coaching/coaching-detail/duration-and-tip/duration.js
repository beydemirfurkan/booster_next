import * as React from 'react';
import Link from "next/link";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function calculateValue(value) {
	return value + ' Hour'
}

export default function Card() {

	const [value, setValue] = React.useState(10);

	const handleChange = (event, newValue) => {
		if (typeof newValue === 'number') {
			setValue(newValue);
			const totalAmountPrice = document.getElementById('total-amount-price');
			if (newValue > 0) {
				const newTotal = (newValue) * 20; //
				totalAmountPrice.textContent = `${newTotal}€`;
			} else {

				totalAmountPrice.textContent = 'Free';
			}


		}
	};

	return (
		<>
			<div className='lg:h-full'>
				<div
					className='flex flex-col items-center px-14 py-10 mb-10 rounded-[28px] h-full coach-card'
					style={{
						backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
					}}>
					<div className='coach-card-inner text-center'>
						<h5 className='text-2xl font-bold pt-6 pb-2'>Coaching Duration</h5>
						<p className='!text-sm pb-6'> 20€ /hr</p>
						<Box sx={{width: 300}}>
							<Slider
								value={value}
								min={0}
								step={1}
								max={100}
								scale={calculateValue}
								onChange={handleChange}
								valueLabelDisplay="auto"
								aria-labelledby="non-linear-slider"
							/>
							<div className='flex items-center justify-between pt-6 pb-10'>
								<p className='!text-base !text-white tracking-wide font-bold'>Total Amount</p>
								<p id='total-amount-price'
								   className='!text-base tracking-wide font-bold !text-white'>Free</p>
							</div>
						</Box>
						<Link
							className="inline-block px-12 py-5 w-full flex justify-center items-center text-lg font-medium text-white transition-all bg-[#0d3bff] rounded-full hover:scale-110 hover:shadow-xl focus:outline-none focus:ring  shadow-[0_10px_60px_-15px_rgba(13,59,255,0.8)]"
							href="/coaching">Coach Me</Link>
					</div>
				</div>
			</div>
		</>
	)
}


import Image from "next/image";
import React from "react";
import Duration from "./duration";
import Tip from "./tip";

export default function Card() {

	return (
		<>
			<div className='lg:h-full lg:flex flex-col  2xl:flex-col gap-10'>
				<Duration/>
				<Tip/>
			</div>
		</>
	)
}


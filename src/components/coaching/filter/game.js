import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Image from 'next/image'

export default function RowRadioButtonsGroup() {
	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label"
					   className={`!text-white !text-sm !font-bold`}>Game</FormLabel>
			<RadioGroup row aria-label="game"
						name="row-radio-buttons-group"
			>
				<FormControlLabel value="Lol" control={<Radio className={`text-white`}/>}
								  label={<Image src='/images/global/league-of-legends-icon.png'
												width={20}
												height={20}
												alt='League of Legends Icon'
								  />}/>
				<FormControlLabel value="Valorant" control={<Radio className={`text-white`}/>}
								  label={<Image src='/images/global/valorant-icon.png'
												width={20}
												height={20}
												alt='Valorant Icon'
								  />}/>
			</RadioGroup>
		</FormControl>
	);
}
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import BoostingTab from "./boosting-tab";
import CoachingTab from "./coaching-tab";
import InformationTab from "./information-tab";
import HistoryTab from "./history-tab";

function Index(props) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{p: 3}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

Index.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}


export default function tabPanelMain() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{width: '100%'}}>
			<Box sx={{borderBottom: 1, borderColor: '#57595a', maxWidth: "600px"}}>
				<Tabs value={value}
					  onChange={handleChange}
					  aria-label="basic tabs example"
				>
					<Tab label="Boosting" {...a11yProps(0)}
						 className='tabs-text'/>
					<Tab label="Coaching" {...a11yProps(1)}
						 className='tabs-text'/>
					<Tab label="Informations" {...a11yProps(2)}
						 className='tabs-text'/>
					<Tab label="Mach History" {...a11yProps(3)}
						 className='tabs-text'/>
				</Tabs>
			</Box>
			<Box sx={{maxWidth: "1200px"}}>
				<Index value={value} index={0}>
					<BoostingTab/>
				</Index>
				<Index value={value} index={1}>
					<CoachingTab/>
				</Index>
				<Index value={value} index={2}>
					<InformationTab/>
				</Index>
				<Index value={value} index={3}>
					<HistoryTab/>
				</Index>
			</Box>

		</Box>
	)
}
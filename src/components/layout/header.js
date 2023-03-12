import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {IoIosPeople} from 'react-icons/io';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import PersonSearch from '@mui/icons-material/PersonSearch';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {useRouter} from 'next/router';


export default function Navbar() {
	const router = useRouter();
	const [mobileMenu, setMobileMenu] = useState(false);
	const [headerClass, setHeaderClass] = useState('fixed top-0 left-0 right-0  z-50');
	const [navItem, setNavItem] = useState('font-bold uppercase text-white text-sm  z-50');
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 20) {
				setHeaderClass('bg-dark bg-opacity-50 backdrop-blur-md fixed top-0 left-0 right-0 z-50')
				setNavItem('font-bold uppercase text-white text-sm')
			} else {
				setHeaderClass('fixed top-0 left-0 right-0  z-50')
				setNavItem('font-bold uppercase text-white text-sm  z-50')
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll)
		};
	}, []);

	return (
		<>
			<header className={headerClass}>
				<div className="container mx-auto ">
					<nav className="items-center justify-between px-5 py-3 sm:py-5 flex">
						<Link href='/' className="px-4 logo">
							<Image src="/images/global/logo2.png" width={60} height={60} alt="Logo"/>
						</Link>
						<div
							className={`items-center navigation-and-signup bg-dark sm:bg-transparent sm:bg-opacity-100 transition-all ms-auto flex `}>
							<ul className="flex flex-col items-center gap-10 sm:flex-row">
								{[
									{name: 'Boosting', link: '/boosting'},
									{name: 'Coaching', link: '/coaching'},
									{name: 'Packet', link: '/packet'},
									{name: 'Blog', link: '/blog'},
								].map((item, index) => (
									<li className='hidden sm:block' key={index}><Link href={item.link}
																					  className='relative font-semibold text-white text-sm uppercase before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#0d3bff] before:transition hover:before:scale-x-100'>{item.name}</Link>
									</li>
								))
								}
								<li className='hidden'>
									{/*<Link*/}
									{/*	className="flex items-center justify-center gap-3 py-3 px-7 bg-[#0d3bff] text-white font-semibold uppercase text-sm shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 rounded-full"*/}
									{/*	href="/"><IoIosPeople className='text-2xl'/><span*/}
									{/*	className='text-sm'>üyelik</span></Link>*/}
								</li>
								<li className=''>

									<Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
										<Tooltip title="Account settings">
											<IconButton
												onClick={handleClick}
												size="small"
												sx={{ml: 2}}
												aria-controls={open ? 'account-menu' : undefined}
												aria-haspopup="true"
												aria-expanded={open ? 'true' : undefined}
											>
												<Avatar sx={{width: 32, height: 32}}>M</Avatar>
											</IconButton>
										</Tooltip>
									</Box>
									<Menu
										anchorEl={anchorEl}
										id="account-menu"
										open={open}
										onClose={handleClose}
										onClick={handleClose}
										disableScrollLock={true}
										PaperProps={{
											elevation: 0,
											sx: {
												overflow: 'visible',
												filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
												mt: 1.5,
												'& .MuiAvatar-root': {
													width: 32,
													height: 32,
													ml: -0.5,
													mr: 1,
												},
												'&:before': {
													content: '""',
													display: 'block',
													position: 'absolute',
													top: 0,
													right: 14,
													width: 10,
													height: 10,
													bgcolor: 'background.paper',
													transform: 'translateY(-50%) rotate(45deg)',
													zIndex: 0,
												},
											},
										}}
										transformOrigin={{horizontal: 'right', vertical: 'top'}}
										anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
									>
										<MenuItem onClick={handleClose}>
											<Avatar/> My account
										</MenuItem>
										<Divider/>
										<MenuItem onClick={handleClose}>
											<Link href='/'>
												<ListItemIcon>
													<Settings fontSize="small"/>
												</ListItemIcon>
												Settings
											</Link>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<Link href='/blog'>
												<ListItemIcon>
													<Logout fontSize="small"/>
												</ListItemIcon>
												Logout
											</Link>
										</MenuItem>
									</Menu>
								</li>
							</ul>
						</div>
					</nav>
				</div>


			</header>

			<div className='bottom-menus'>
				<BottomNavigation
					showLabels
					value={value}
					sx={{
						width: 700,
						maxWidth: '100%',
						position: 'fixed',
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: 1000,
						borderTop: '1px solid #363333',
						backgroundColor: '#24232a',
						height: '70px',
					}}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>

					<BottomNavigationAction
						onClick={() => router.push('/boosting')}
						sx={{color: '#fff!important'}} label="Boosting"
						icon={<RocketLaunch sx={{color: '#fff!important'}}/>}

					/>
					<BottomNavigationAction
						onClick={() => router.push('/coaching')}
						sx={{color: '#fff!important'}} label="Coaching"
						icon={<PersonSearch sx={{color: '#fff!important'}}/>}

					/>
					<BottomNavigationAction
						onClick={() => router.push('/packet')}
						sx={{color: '#fff!important'}} label="Packet"
						icon={<ShoppingCart sx={{color: '#fff!important'}}/>}

					/>
					<BottomNavigationAction
						onClick={() => router.push('/blog')}
						sx={{color: '#fff!important'}} label="Blog"
						icon={<EditIcon sx={{color: '#fff!important'}}/>}

					/>

				</BottomNavigation>
			</div>

		</>


	)
}


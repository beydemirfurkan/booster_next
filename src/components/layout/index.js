import Header from './header'
import Footer from './footer'
import {useEffect} from 'react';

export default function Layout({children}) {
	useEffect(() => {
		document.documentElement.classList.remove('no-js');
	}, []);
	return (
		<>
			<Header/>
			<main className="no-js">{children}</main>
			<Footer/>
		</>
	)
}
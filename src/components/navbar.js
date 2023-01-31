import Link from 'next/link';
import { useState, useEffect } from 'react';



export default function Navbar() {
    
    const [headerClass, setHeaderClass] = useState('fixed top-0 left-0 right-0 transition-all z-50');
    const [navItem, setNavItem] = useState('font-bold uppercase text-white text-sm transition-all z-50');

        useEffect(() => {
            const handleScroll = () => {
                if(window.pageYOffset > 20) {
                    setHeaderClass('bg-white fixed top-0 left-0 right-0 transition-all z-50')
                    setNavItem('font-bold uppercase text-dark text-sm')
                } else {
                    setHeaderClass('fixed top-0 left-0 right-0 transition-all z-50')
                    setNavItem('font-bold uppercase text-white text-sm transition-all z-50')
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removEventListener('scroll', handleScroll)
            };
        },[]);

    return (
        <header className={ headerClass }>
            <div className="container mx-auto">
                <nav className="flex justify-between items-center py-5">
                    <div className="logo">
                        <h1>WebDev News</h1>
                    </div>
                    <div className="navigation-and-signup ms-auto flex items-center">
                        <ul class="flex gap-10">
                            <li> <Link href="/" className={navItem}>Boosting</Link> </li>
                            <li> <Link href="/about" className={navItem}>Coaching</Link></li>
                            <li> <Link href="/webdev" className={navItem}>Packet</Link></li>
                        </ul>
                        <div className="search ml-20 bg-blue w-32 h-12 flex justify-center items-center py-3 rounded-full">
                            <Link className="button uppercase text-white text-sm font-bold" href="">üyelik</Link>
                        </div>
                    </div>

                </nav>
            </div>
        </header>


    )
}
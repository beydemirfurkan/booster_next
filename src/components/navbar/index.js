import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoIosPeople } from 'react-icons/io';


export default function Navbar() {
    
    const [headerClass, setHeaderClass] = useState('fixed top-0 left-0 right-0 transition-all z-50');
    const [navItem, setNavItem] = useState('font-bold uppercase text-white text-sm transition-all z-50');

        useEffect(() => {
            const handleScroll = () => {
                if(window.pageYOffset > 20) {
                    setHeaderClass('bg-dark bg-opacity-50 backdrop-blur-md fixed top-0 left-0 right-0 transition-all z-50')
                    setNavItem('font-bold uppercase text-white text-sm')
                } else {
                    setHeaderClass('fixed top-0 left-0 right-0 transition-all z-50')
                    setNavItem('font-bold uppercase text-white text-sm transition-all z-50')
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll)
            };
        },[]);

    return (
        <header className={ headerClass }>
            <div className="container mx-auto">
                <nav className="flex justify-between items-center py-4">
                    <div className="logo">
                        <h1>WebDev News</h1>
                    </div>
                    <div className="navigation-and-signup ms-auto flex items-center">
                        <ul className="flex items-center gap-10"> 
                        {[
                            {name: 'Boosting', link: '/'},
                            {name: 'Coaching', link: '/about'},
                            {name: 'Packet', link: '/articles'},
                        ].map((item, index) => (
                            <li key={index}><Link href={item.link} className='relative font-semibold text-white text-sm uppercase before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#0d3bff] before:transition hover:before:scale-x-100'>{item.name}</Link></li>
                        ))
                        }
                            <li>
                                <Link className="flex items-center justify-center gap-3 py-3 px-7  bg-[#0d3bff] text-white font-semibold uppercase text-sm shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 rounded-full" href="/"><IoIosPeople className='text-2xl' /><span className='text-sm'>üyelik</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>


    )
}
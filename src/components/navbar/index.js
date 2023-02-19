import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';


export default function Navbar() {
    const [mobileMenu , setMobileMenu] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <div className="container mx-auto ">
                <nav className="items-center justify-between py-2 sm:flex">
                    <Link href='/' className="px-4 logo sm:px-0">
                        <Image src="/images/global/logo.png" width={80} height={80} alt="Logo" />
                    </Link>
                    <div className="sm:hidden">
                      <button className="absolute p-2 text-3xl text-white rounded-md outline-none top-6 right-5 focus:border-gray-100 focus:border"
                          onClick={() => setMobileMenu(!mobileMenu)}
                      >
                          {
                              mobileMenu ? (
                                <MdClose className='!text-white'/>
                              ) : (
                                <GiHamburgerMenu className='text-white'/>
                              )
                          }
                      </button>
                  </div>
                    <div className={`items-center navigation-and-signup bg-dark  sm:bg-transparent sm:bg-opacity-100 transition-all p-5 sm:p-0 ms-auto sm:flex ${ mobileMenu ? 'flex' : 'hidden' } `}>
                        <ul className="flex flex-col items-center gap-10 sm:flex-row"> 
                        {[
                            {name: 'Boosting', link: '/'},
                            {name: 'Coaching', link: '/about'},
                            {name: 'Packet', link: '/articles'},
                        ].map((item, index) => (
                            <li key={index}><Link href={item.link} className='relative font-semibold text-white text-sm uppercase before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#0d3bff] before:transition hover:before:scale-x-100'>{item.name}</Link></li>
                        ))
                        }
                            <li className=''>
                                <Link className="flex items-center justify-center gap-3 py-3 px-7 bg-[#0d3bff] text-white font-semibold uppercase text-sm shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 rounded-full" href="/"><IoIosPeople className='text-2xl' /><span className='text-sm'>üyelik</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            
        </header>


    )
}
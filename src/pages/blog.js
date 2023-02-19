import Link from 'next/link';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';


const blogData = [
    {
        link: '/',
        image: '/images/blog/game1.png',
        title: 'Legends Premium',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        link: '/',
        image: '/images/blog/game2.png',
        title: 'Legends Premium',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        link: '/',
        image: '/images/blog/game3.png',
        title: 'Legends Premium',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        link: '/',
        image: '/images/blog/game2.png',
        title: 'Legends Premium',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        link: '/',
        image: '/images/blog/game1.png',
        title: 'Legends Premium',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    
];


const filterMenu = [
    {   
        id: "lolFilter",
        link: '/',
        title: 'League of Legends',
    },
    {   
        id: "valorantFilter",
        link: '/',
        title: 'Valorant',
    },
    {   
        id: "learnerFilter",
        link: '/',
        title: 'Eğitici',
    },
    {   
        id: "strategyFilter",
        link: '/',
        title: 'Strateji',
    },
]

export default function blog() {
    
  return (
    <section className='px-5 py-32 lg:px-0 blog-page'>
        <div className="container px-4 mx-auto">
            <div className='items-center justify-between sm:flex'>
                <div>
                    <p className="pb-2 !text-sm font-semibold uppercase tracking-px">bizi takipte kalın</p>
                    <h2 className="mb-5 text-3xl font-bold leading-none sm:mb-16 md:text-4xl xl:text-5xl font-heading tracking-px-n custom-title">
                        Blog
                    </h2>
                </div>
                <div className="flex sm:justify-center">
                    <div className="mb-3 xl:w-[34rem]">
                        <p className='pb-3  !text-white !text-xs'>Blog Ara</p>
                        <div className="relative flex items-stretch w-full mb-4 input-group">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-[#b4aeb3] bg-[#605168] bg-clip-padding border border-solid border-[#605168] transition ease-in-out m-0  focus:bg-[#605168] focus:border-white focus:outline-none placeholder:text-xs placeholder:text-[#b4aeb3]" placeholder="Aramak istediğin yazıyı yaz" aria-label="Search" aria-describedby="button-addon2"/>
                        <button className="btn px-6 py-2.5 bg-[#605168] text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:border-white   focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#605168] active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                            <BsSearch className='text-xl'/>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-between'>
                <div className='order-2 w-full pb-5 mb-8 lg:pr-20 lg:w-3/4 sm:order-1'>
                    <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
                         {
                            blogData.map((item, index) => {
                                return (
                                    <Link href={`${item.link}`} className='flex flex-col space-y-2 blog-item' key={index}>
                                        <Image src={`${item.image}`} alt='blog' width={400} height={300} className='object-cover object-center rounded-lg'/>
                                        <div className='w-full h-full max-w-xs py-4 sm:max-w-sm'>
                                            <div className='flex flex-col space-y-2'>
                                                <h5 className='!text-white !text-sm capitalize text-ellipsis'>{item.title}</h5>
                                                <p className='!text-xs'>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                         }
                    </div>
                </div>
                <div className='order-1 w-full mb-10 lg:w-1/4 lg:order-2 sm:mb-0'>
                    <div className='flex flex-col p-5 space-y-4 rounded-lg  bg-gradient-to-r from-[#322737] to-[#403346]'>
                        <h4 className='text-center'>Filtrele</h4>
                        <ul className="p-4 space-y-1 ">
                         {
                            filterMenu.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <label htmlFor={`${item.id}`} className="inline-flex items-center gap-2">
                                            <input type="checkbox" id={`${item.id}`} className="w-5 h-5 bg-transparent border-gray-300 rounded"/>
                                            <span className="text-sm font-medium text-white">{item.title}</span>
                                        </label>
                                    </li>
                                )})
                         }
                        </ul>
                    </div>         
                </div>                                
            </div>
        </div>
    </section>
  )
}

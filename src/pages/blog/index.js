import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {BsSearch} from 'react-icons/bs';


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


export default function blog({posts}) {

	return (
		<>
			<Head>
				<title>Eleboost | Blog</title>
			</Head>
			<section
				className='px-5 py-40 lg:px-0 blog-page bg-[url(/images/blog/bg.png)] bg-cover bg-top min-h-screen'>
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
									<input type="search"
										   className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-[#b4aeb3] bg-[#605168] bg-clip-padding border border-solid border-[#605168] transition ease-in-out m-0  focus:bg-[#605168] focus:border-white focus:outline-none placeholder:text-xs placeholder:text-[#b4aeb3]"
										   placeholder="Aramak istediğin yazıyı yaz" aria-label="Search"
										   aria-describedby="button-addon2"/>
									<button
										className="btn px-6 py-2.5 bg-[#605168] text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:border-white   focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#605168] active:shadow-lg transition duration-150 ease-in-out flex items-center"
										type="button" id="button-addon2">
										<BsSearch className='text-xl'/>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-wrap justify-between'>
						<div className='order-2 w-full pb-5 mb-8 lg:pr-20 lg:w-3/4 sm:order-1'>
							<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
								{posts.map((post, index) => {
									return (
										<div className='blog-item-card' key={index}>
											<Link href={`/blog/blog-detail/${post.slug}`}
												  className='flex flex-col space-y-2 blog-item'>
												<Image src={post.frontmatter.images} alt='blog' width={400} height={300}
													   className='object-cover object-center rounded-lg'/>
												<div className='w-full h-full max-w-xs py-4 sm:max-w-sm'>
													<div className='flex flex-col space-y-2'>
														<h5 className='!text-white !text-sm capitalize text-ellipsis'>
															{post.frontmatter.title}</h5>
														<p className='!text-xs text-white truncate'>{post.frontmatter.description}</p>
													</div>
												</div>
											</Link>
										</div>

									)
								})}
							</div>
						</div>
						<div
							className='order-1 hidden w-full gap-5 mb-10 flex-wrap: md:flex lg:flex-col lg:w-1/4 lg:order-2 sm:mb-0'>
							<div className='flex flex-col p-5 space-y-4' style={{
								borderRadius: '22px',
								backgroundImage: 'linear-gradient(90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
								width: '304px',
								height: '268px',
								zIndex: '4',

							}}>
								<h3 className='text-center'>Filtrele</h3>
								<ul className="p-4 space-y-1 ">
									{
										filterMenu.map((item, index) => {
											return (
												<li key={index}>
													<label htmlFor={`${item.id}`}
														   className="inline-flex items-center gap-2">
														<input type="checkbox" id={`${item.id}`}
															   className="bg-transparent border-gray-300 rounded"

															   style={{
																   border: '1px solid #EDEDED',
																   backgroundColor: 'rgb(48, 15, 243)',
																   width: '25px',
																   height: '25px',
																   borderRadius: '4px'
															   }}

														/>
														<span
															className="text-sm font-medium text-white">{item.title}</span>
													</label>
												</li>
											)
										})
									}
								</ul>
							</div>
							<div className='flex flex-col p-5 space-y-4' style={{
								borderRadius: '22px',
								backgroundImage: 'linear-gradient(90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
								width: '304px',
								height: '268px',
								zIndex: '4',

							}}>
								<h3 className='text-center'>Son Yazılar</h3>
								<ul className="px-4 space-y-4">
									<li>
										<div className='flex items-center justify-between gap-4'>
											<Image src='/images/blog/game1.png' alt='blog' width={100} height={100}
												   className='object-cover object-center rounded-lg'/>
											<p className='!text-sm overflow-hidden text-ellipsis text-white'>
												Neden Lol
												Boostlamalıyım
												detaylı anlatımfsdfdsfdsfsdfdsfdsfdfsdfsd
											</p>
										</div>
									</li>
									<li>
										<div className='flex items-center justify-between gap-4'>
											<Image src='/images/blog/game1.png' alt='blog' width={100} height={100}
												   className='object-cover object-center rounded-lg'/>
											<p className='!text-sm overflow-hidden text-ellipsis text-white'>
												Neden Lol
												Boostlamalıyım
												detaylı anlatımfsdfdsfdsfsdfdsfdsfdfsdfsd
											</p>
										</div>
									</li>

								</ul>
							</div>
						</div>
					</div>
				</div>

			</section>
		</>

	)
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('src/data/posts'))

	const posts = files.map(filename => {
		const slug = filename.replace('.md', '')
		const markdownWithMeta = fs.readFileSync(path.join('src/data/posts', filename), 'utf-8')
		const {data: frontmatter} = matter(markdownWithMeta)
		return {
			slug,
			frontmatter
		}
	})

	return {
		props: {
			posts: posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
		}
	}
}
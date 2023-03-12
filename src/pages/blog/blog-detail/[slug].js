import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image';

export default function blogDetail({frontmatter: {title, description, images}, slug, content}) {
	return (
		<section className='pt-52 pb-40 blog-detail bg-[url(/images/blog/detail/bg.png)] bg-cover bg-center'>
			<div className="container px-4 mx-auto">
				<div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
					<Image src='/images/blog/detail/victory.png'
						   objectFit='cover'
						   width={1920}
						   height={500}
						   alt='blog detail'

					/>
					<div className='py-20 blog-detail-description'>
						<h2 className='text-5xl custom-shadow'>{title} </h2>
						<p className='pt-10 text-start'>
							{description}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}


export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('src/data/posts'))
	const paths = files.map(filename => ({
		params: {
			slug: filename.replace('.md', '')
		}
	}))

	console.log(paths)

	return {
		paths,
		fallback: false
	}
}


export async function getStaticProps({params: {slug}}) {
	const markdownWithMeta = fs.readFileSync(path.join('src/data/posts', slug + '.md'), 'utf-8')


	const {data: frontmatter, content} = matter(markdownWithMeta)

	return {
		props: {
			frontmatter,
			slug,
			content
		},
	}
}

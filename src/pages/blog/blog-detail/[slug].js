import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Image from 'next/image';
import Link from 'next/link';
import { BsLeftArrow } from 'react-icons/bs';

export default function blogDetail ({frontmatter: { title, description, images }, slug, content}) {
  return (
    <section className='pt-40 pb-40 blog-detail bg-[url(/images/blog/detail/bg.png)] bg-cover bg-center'>
        <div className="container px-4 mx-auto">
            <div className="flex flex-col justify-center">
                <Image src='/images/blog/detail/victory.png' 
                    objectFit='cover'
                    width={1920}
                    height={500}
                    alt='blog detail'
                    
                 />
                <div className='py-20 blog-detail-description'>
                    <h2 className='text-5xl text-center custom-shadow'>{title} </h2>
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
    const files = fs.readdirSync(path.join('src/posts'))
    
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


export async function getStaticProps({ params: { slug }}) {
    const markdownWithMeta = fs.readFileSync(path.join('src/posts', slug + '.md'), 'utf-8')


    const { data: frontmatter, content} = matter(markdownWithMeta)
    
    return {
        props: {
            frontmatter,
            slug,
            content
        },
    }
}

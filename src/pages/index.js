import Head from 'next/head';
import Hero from '../components/home/hero';
import Services from '../components/home/services';
import RankedFirst from '../components/home/ranked';
import ValorantBoost from '../components/home/valorant-boost';
import Coaching from '../components/home/coaching';
import Vpn from '../components/home/vpn';
import Ranked2 from '../components/home/ranked2';
import Faq from '../components/home/faq';
import Blog from '../components/home/blog'; 

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Services/>
      <RankedFirst />
      <ValorantBoost />
      <Coaching/>
      <Vpn />
      <Ranked2/>
      <Faq/>
      <Blog/>
    </>
  )
}

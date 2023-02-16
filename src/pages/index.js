import Head from 'next/head';
import Hero from '../components/home/hero';
import HeroBottom from '../components/home/hero-bottom';
import RankedFirst from '../components/home/ranked';
import ValorantBoost from '../components/home/valorant-boost';
import Coaching from '../components/home/coaching';
import Vpn from '../components/home/vpn';
import Ranked2 from '../components/home/ranked2';
import Faq from '../components/home/faq';

export default function Home() {
  return ( 
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <HeroBottom/>
      <RankedFirst />
      <ValorantBoost />
      <Coaching/>
      <Vpn />
      <Ranked2/>
      <Faq/>
    </div>
  )
}

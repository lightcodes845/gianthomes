import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
// import AboutSection from "../components/About";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giant Homes</title>
        <meta name="description" content="Giant Homes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero />
        {/*<AboutSection />*/}
        <Services />
    </div>
  )
}

export default Home

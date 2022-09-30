import Head from 'next/head'
import Abstract from './components/Abstract'
import Bio from './components/Bio'
import Name from './components/Name'
import OnTheWeb from './components/OnTheWeb'
// import TopContent from './components/TopContent'
import Works from './components/Works'
import dynamic from 'next/dynamic'

const TopContent = dynamic(() => import('./components/TopContent'), {
  ssr: false, // <- ここで ssr を無効にするオプションを渡す
})

const Home = () => {
  return (
    <div>
      <Head>
        <title>Kazuma Kurisaki Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="top-content-container" className="h-[50px]">
        <TopContent></TopContent>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="w-[90%] sm:w-[60%] lg:w-[50%]">
          <div className="h-[500px]">
            <Name></Name>
          </div>
          <OnTheWeb></OnTheWeb>
          <div className="mt-10">
            <Works></Works>
          </div>
          <div className="mt-10">
            <Bio></Bio>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

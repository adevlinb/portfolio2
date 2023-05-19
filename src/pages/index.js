import Head from 'next/head'
import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import Image from 'next/image';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Devlin Booth" content="Software Engineering Portfolio" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-40'>
              <img src="https://i.imgur.com/WoG57t1.png" alt="portfolio" className="w-full h-full"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left"/>
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Devlin_Booth_Resume.pdf"
                  target="_blank"
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg border-solid border-light border-2
                  text-lg font-semibold hover:bg-light hover:text-dark hover:border-dark'
                  download={true}>
                    Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:adevlin.booth@gmail.com"
                  className='ml-4 text-lg font-medium capitalize text-dark underline'
                  >
                  Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="myProfile" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}

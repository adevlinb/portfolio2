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
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-40 md:w-1/2'>
                <img src="https://i.imgur.com/WoG57t1.png" alt="portfolio" className="w-full h-full  md:inline-block md:w-full" priority 
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText 
                	text="Turning Vision Into Reality With Code And Design." 
					className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
                <p className='my-4 text-base font-medium'>
					As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
					Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
					<Link href="/Devlin_Booth_Resume.pdf"
						target="_blank"
						className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg border-solid 
						border-light border-2 text-lg font-semibold hover:bg-light hover:text-dark 
						hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark 
						hover:dark:text-light hover:dark:border-light'
						download={true}>
						Resume <LinkArrow className={"w-6 ml-1"}/>
					</Link>
					<Link href="mailto:adevlin.booth@gmail.com" className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
                </div>
            </div>
        </div>
        </Layout>
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
            <Image src={lightBulb} alt="myProfile" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}

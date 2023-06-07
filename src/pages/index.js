import Head from 'next/head'
import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import Image from 'next/image';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/TransitionEffect';
import roboArtist from "../../public/images/projects/roboArtist.png";

export default function Home() {
  return (
    <>
		<Head>
			<title>Devlin&apos;s Portfolio</title>
			<meta name="Devlin Booth" content="Software Engineering Portfolio" />
		</Head>
		<TransitionEffect />
		<main className='flex items-center text-dark w-full min-h-screen dark:text-light relative'>
			<Layout className='pt-0 md:p-16 sm:pt-8'>
			<div className="flex lg:items-center 2xl:items-start 2xl:justify-evenly justify-between w-full lg:flex-col">
				<div className='lg:max-w-[45%] 2xl:max-w-[35%] sm-w-[45%] md:max-w-[55%] rounded-full'>
					<Image src={roboArtist} width="100vh" alt="portfolio" className="w-full h-auto  lg:mb-8  border-2 ring ring-blue-900 ring-offset-2 rounded-full md:inline-block md:w-full" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
				</div>
				<div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
					<AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
					<p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
						As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
						Explore my latest projects and articles, showcasing my expertise in React.js and web development.
					</p>
					<div className='flex items-center self-start mt-2 lg:self-center'>
						<Link href="/Devlin_Booth_Resume.pdf" target="_blank"
							className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg border-solid 
							border-light border-2 text-lg font-semibold hover:bg-light hover:text-dark 
							hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark 
							hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
							download={true}>
							Resume<LinkArrow className={"w-6 ml-1"}/>
						</Link>
						<Link href="mailto:adevlin.booth@gmail.com" className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>
					</div>
				</div>
			</div>
			</Layout>
			<HireMe />
			<div className='fixed right-8 bottom-8 inline-block w-16 md:hidden'>
				<Image src={lightBulb} alt="myProfile" className='w-full h-auto'/>
			</div>
		</main>
    </>
  	)
}

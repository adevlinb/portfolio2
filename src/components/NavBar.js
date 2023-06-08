import { GithubIcon, LinkedInIcon, XylaIcon, SunIcon, MoonIcon } from './Icons';
import Logo from './Logo';
import Link from "next/link"
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const iconInfo="w-6 m-4";

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300 dark:bg-light
          ${router.asPath === href ? "w-full" : "w-0"}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();
	const handleClick = () => {
		toggle()
		router.push(href)
	}

	return (
		<button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
			{title}
			<span className={`h-[1px] inline-block absolute left-0 -bottom-0.5 bg-light group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
		</button>
	)
}

export const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
	setOpen(!open);
  }
  const spanClass = "bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm "

  return (
    <header className="w-full px-32 py-5 xs:pb-4 overflow:visible z-10 font-medium flex items-center justify-between dark:text-light relative lg:px-16 md:px-12 sm:px-8">

		<button className=' my-3 flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
			<span className={`${spanClass} ${open ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
			<span className={`${spanClass} my-0.5 ${open ? "opacity-0" : "opacity-100" }`}></span>
			<span className={`${spanClass} ${open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
		</button>

		{open ?
			<motion.div 
				className='flex justify-between items-center min-w-[70vw] lgmin:hidden flex-col 
				fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 
				rounded-lg backdrop-blur-md py-32'
				initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
				transition={{duration:0.25}}
				animate={{scale:1, opacity:1}}>
				<nav className='flex items-center flex-col justify-center '>
					<CustomMobileLink href="/" title="Home" className='' toggle={handleClick}/>
					<CustomMobileLink href="/about" title="About" className='' toggle={handleClick}/>
					<CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick}/>
					<CustomMobileLink href="/games" title="Games" className='' toggle={handleClick}/>
				</nav>
				<nav className='flex items-center justify-evenly flex-wrap mt-4'>
					<motion.a href="https://github.com/adevlinb" target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className={`rounded-full dark:bg-dark bg-light`}><GithubIcon /></motion.a>
					<motion.a href="https://www.linkedin.com/in/devlin-booth/" target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className={`${iconInfo} !m-6`}><LinkedInIcon /></motion.a>
					{/* <motion.a href="https://xyla-books.herokuapp.com/" target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className={`${iconInfo}`} ><XylaIcon fill={`#FF1493`} /></motion.a> */}
					<button 
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={`flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }`}>
					{ mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} /> }
					</button>
				</nav>
			</motion.div>
			:
			null
		}

		<div className='w-full flex justify-between items-center lg:hidden'>
			<nav>
				<CustomLink href="/" title="Home" className='mr-4' />
				<CustomLink href="/about" title="About" className='mx-4'/>
				<CustomLink href="/projects" title="Projects" className='mx-4'/>
				<CustomLink href="/games" title="Games" className='ml-4'/>
			</nav>
			<nav className='flex items-center justify-center flex-wrap'>
				<motion.a href="https://github.com/adevlinb" target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className={iconInfo}><GithubIcon /></motion.a>
				<motion.a href="https://www.linkedin.com/in/devlin-booth/" target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className={iconInfo}><LinkedInIcon /></motion.a>
				{/* <motion.a href="https://xyla-books.herokuapp.com/" target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className={`${iconInfo} `}><XylaIcon fill="#0A66C2" /></motion.a> */}
				<button 
				onClick={() => setMode(mode === "light" ? "dark" : "light")}
				className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }`}>
				{ mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} /> }
				</button>
			</nav>
		</div>

        <div className="absolute left-[50%] top-3 translate-x-[-50%] scale-90"><Logo /></div>
    </header>
  )
}





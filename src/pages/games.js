import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import minesweeper from "../../public/images/projects/minesweeper.png";
import ttt from "../../public/images/projects/ttt.png";
import rpsWin from "../../public/images/projects/rps-win.png";
import mastermind from "../../public/images/projects/mastermind.png";
import connectFour from "../../public/images/projects/connect-four.png";
import checkers from "../../public/images/projects/checkers.png";
import spaceman from "../../public/images/projects/spaceman.png";
import { CSSIcon, HtmlIcon, JavascriptIcon, GithubIcon } from '@/components/Icons';

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
        
    }
    
    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave} >
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <FramerImage 
            style={{x:x, y:y}}
                ref={imgRef} 
                src={img} alt={title} 
                initial={{ opacity: 0 }}
                whileInView={{opacity: 1, transition: { duration: 0.4 }}}
                className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden" />
        </Link>
    )
}

const Game = ({img, title, date, link, github}) => {
    return ( 
        <motion.li 
            initial={{y:165}}
            whileInView={{y:0, transition: {duration: 0.5, ease:"easeInOut"}}}
            viewport={{once:true}}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
            className="relative w-full p-4 py-6 my-4 rounded-xl flex 
                items-center justify-between  bg-light text-dark first:mt-0 border dark:text-light
                border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark sm:flex-col sm:items-start">
            <div className='flex items-center'>
                <motion.a href={github} target="_blank"  whileHover={{scale:1.5}} className="mr-1"><GithubIcon className="scale-[65%]" /></motion.a>
                <MovingImg title={title} img={img} link={link} className="z-30"/>
            </div>
            <span className="text-primary font-semibold dark:text-primaryDark sm:self-start xs:text-sm">{date}</span>
        </motion.li>
    )
}

const FeaturedGame = ({img, title, time, link, github}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:border-light dark:bg-dark'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light"/>
            <Link href={link} target="_blank" className="w-full cursor-pointer inline-block overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto  object-cover object-center sm:h-[55vmin] md:h-[56vmin] lg:h-[57vmin] xl:h-[58vmin] 2xl:h-[59vmin]" 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
            </Link> 
                <Link href={link} target="_blank"><h2 className='capitalize text-2xl font-bold my-2 hover:underline sm:text-lg'>{title}</h2></Link>
            <div className='flex items-center justify-between mt-2'>
                <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
                <motion.a href={github} target="_blank"  whileHover={{scale:1.5}} className="mr-1"><GithubIcon className="scale-[65%]" /></motion.a>
            </div>
        </li>
    )
}

export default function Games() {
  return (
    <>
    <Head>
        <title>aDevlinb Potfolio! | Games Page</title>
        <meta name="description" content="profile - Games page"/>
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Games Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16 '>
                <FeaturedGame 
                    title="Checkers"
                    github="https://github.com/adevlinb/checkers"
                    time="The family favorite! Checkers!"
                    img={checkers}
                    link="https://adevlinb.github.io/checkers/"
                    />
                <FeaturedGame 
                    title="Minesweeper"
                    github="https://github.com/adevlinb/minesweeper"
                    time="Click, Click, Boom!"
                    img={minesweeper}
                    link="https://adevlinb.github.io/minesweeper/"
                />
            </ul>
        <div className="font-bold flex justify-between w-full my-8 mt-32 sm:flex-col sm:items-center sm:text-center">
            <h1 className="text-6xl sm:text-3xl">All Games</h1>
            <div className='flex w-[25%] items-end justify-evenly'>
                <JavascriptIcon divClass={"m-4"}/>
                <HtmlIcon divClass={"m-4"}/>
                <CSSIcon divClass={"m-4"}/>
            </div>
        </div>
        <ul>
            <Game 
                title="Mastermind"
                img={mastermind}
                github="https://github.com/adevlinb/Mastermind"
                link="https://adevlinb.github.io/Mastermind/"
                date="Can you crack the code!?" />
            <Game
                title="Rock, Paper, Scissors"
                date="'Rock! Paper! Scissors! Shoot!' "
                github="https://github.com/adevlinb/rps"
                link="https://adevlinb.github.io/rps/"
                img={rpsWin}/>
            <Game
                title="Connect Four"
                github="https://github.com/adevlinb/connect-four"
                date="Go for it! Connect Four!"
                link="https://adevlinb.github.io/connect-four/"
                img={connectFour}/>
            <Game
                title="Tic-Tac-Toe"
                github="https://github.com/adevlinb/Tic-Tac-Toe"
                date="The original brain game!"
                link="https://adevlinb.github.io/Tic-Tac-Toe/"
                img={ttt}/>
            <Game
                title="Spaceman"
                date="Intergalactic Hangman! Can you guess the word!?"
                github="https://github.com/adevlinb/spaceman"
                link="https://adevlinb.github.io/spaceman/"
                img={spaceman}
                />
            {/* <Game
                title="Concentration"
                date="Flip the cards and find the matches!"
                github="/"
                link="/"
                img={minesweeper}
            /> */}
        </ul>
        </Layout>
    </main> 
    </>
  )
}



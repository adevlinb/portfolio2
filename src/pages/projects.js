import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from "framer-motion";

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, image, link, github, project }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light"/>
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={image} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority 
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
            </Link> 
            <div className="w-1/2 flex flex-col items-start justify-between p-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon/></Link>
                    <Link href={project} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark">Visit The Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, image, link, github, project }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light"/>
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={image} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority 
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={project} target="_blank" className="ml-4 text-lg font-semibold underline">Visit</Link>
                    <Link href={github} target="_blank" className="w-8"><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}


export default function projects() {
  return (
    <>
        <Head>
            <title>aDevlinb Potfolio! | Projects Page</title>
            <meta name="description" content="profile - about page"/>
        </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16"/>
                <div className="grid grid-cols-12 gap-12 gap-y-32">
                    <div className="col-span-12">
                        <FeaturedProject
                            title="Crypto Screener Application"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                            image={project1}
                            link="/"
                            github="/"
                            type="Featured Project"
                            project="google.com"

                        />
                    </div>
                    <div className="col-span-6">
                        <Project title="Crypto Screener Application" image={project1} link="/" github="/" type="Featured Project" project="google.com"/>
                    </div>
                    <div className="col-span-6">
                        <Project title="Crypto Screener Application" image={project1} link="/" github="/" type="Featured Project" project="google.com"/>
                    </div>
                    <div className="col-span-12">
                        <FeaturedProject
                            title="Crypto Screener Application"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                            image={project1}
                            link="/"
                            github="/"
                            type="Featured Project"
                            project="google.com"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project title="Crypto Screener Application" image={project1} link="/" github="/" type="Featured Project" project="google.com"/>
                    </div>
                    <div className="col-span-6">
                        <Project title="Crypto Screener Application" image={project1} link="/" github="/" type="Featured Project" project="google.com"/>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

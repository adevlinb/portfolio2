import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { APIIcon, CSSIcon, CodeSandboxIcon, DjangoIcon, GithubIcon, HtmlIcon, JavascriptIcon, MongoDbIcon, NextJsIcon, NodeJSIcon, PostgresqlIcon, PythonIcon, ReactIcon, TailWindIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import xyla from "public/images/projects/xyla.png";
import climateEvents from "public/images/projects/climateevents.png";
import tasteBuds from "public/images/projects/taste-buds.png";
import instacats from "public/images/projects/instacats.png";
import vulnerabilities from "public/images/projects/vulnerabilities.png";
import niftyDocs from "public/images/projects/nifty-docs.png";
import niftyBox from "public/images/projects/nifty-box.png";
import niftyDogs from "public/images/projects/nifty-dogs.png";
import portfolio from "public/images/projects/portfolio.png";

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, image, link, github, project, children }) => {
    return (
        <article className="w-full flex  justify-between rounded-3xl border border-solid
            border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full border-[0.15px] border-dark">
                <FramerImage src={image} alt={title} className="w-full h-auto object-cover min-h-[25vmin]"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority 
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
            </Link> 
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <div className="flex w-full">
                    <div className="flex flex-col w-[55%]">
                        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base flex">{type}</span>
                        <Link href={link} target="_blank" className="hover:underline underline-offset-2 flex">
                            <h2 className="mb-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                        </Link>
                    </div>
                    <div className="flex items-start justify-end w-[45%]">
                        {children}
                    </div>
                </div>
                    
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon/></Link>
                    <Link href={project} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, image, link, github, project, children }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg border-[0.15px] border-dark">
                <FramerImage src={image} alt={title} className="w-full h-auto object-cover sm:h-[40vmin] md:h-[20vmin] lg:h-[25vmin] xl:h-[30vmin] 2xl:h-[35vmin]"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority 
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <div className="flex w-full">
                    <div className="flex flex-col w-1/2">
                        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                            <h2 className="mb-2 w-full text-left text-3xl font-bold lg:text-xl md:text-lg">{title}</h2>
                        </Link>
                    </div>
                    <div className="flex justify-end w-1/2">
                        {children}
                    </div>
                </div>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={project} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6"><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}


export default function projects() {
    const iconInfo = "w-6 mx-3 sm:mx-1 ";

    return (
    <>
        <Head>
            <title>Potfolio | Projects</title>
            <meta name="description" content="profile - about page"/>
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                <div className="grid grid-cols-12 gap-12 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className="col-span-12">
                        <FeaturedProject title="XYLA" summary="Social App for Readers." image={xyla} link="https://xyla-books.herokuapp.com/" github="https://github.com/adevlinb/XYLA" type="Featured Project" project="https://xyla-books.herokuapp.com/" >
                            <ReactIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mr-1"}/>
                            <NodeJSIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mx-1"}/>
                            <MongoDbIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"ml-1"}/>
                        </FeaturedProject>
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="Taste•Buds" image={tasteBuds} link="https://taste-buds-dining.herokuapp.com/" github="https://github.com/adevlinb/fakebuds" type="Featured Project" project="https://taste-buds-dining.herokuapp.com/">
                            <PythonIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mr-1"}/>
                            <DjangoIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mx-1"}/>
                            <PostgresqlIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"ml-1"}/>
                        </Project>
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="Climate Events" image={climateEvents} link="https://climate-events.herokuapp.com/" github="https://github.com/adevlinb/climate-events" type="Featured Project" project="https://climate-events.herokuapp.com/">
                            <MongoDbIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mr-1"}/>
                            <MongoDbIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mx-1"}/>
                            <MongoDbIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"ml-1"}/>
                        </Project>
                    </div>
                    <div className="col-span-12">
                        <FeaturedProject title="Instacats" summary="A fun app where peeps can post pics of their kitties and comment on their favorite posts!" image={instacats} link="/" github="https://github.com/adevlinb/instacats" type="Featured Project" project="google.com">
                            <ReactIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mr-1"}/>
                            <JavascriptIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mx-1"}/>
                            <MongoDbIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"ml-1"}/>
                        </FeaturedProject>
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="Vulnerabilities" image={vulnerabilities} link="https://adevlinb.github.io/vulnerabilities-project" github="https://github.com/adevlinb/vulnerabilities-project" type="Documentation" project="https://adevlinb.github.io/vulnerabilities-project">
                            <HtmlIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mr-1"}/>
                            <CSSIcon className={"scale-[50%]"} titleClass={"!mt-0"} divClass={"mx-1"}/>
                        </Project>
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="[Nifty-Docs]" image={niftyDocs} link="https://adevlinb.github.io/nifty-docs/" github="https://github.com/adevlinb/nifty-docs/" type="Documentation" project="https://adevlinb.github.io/nifty-docs/">
                            <HtmlIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"mr-1"}/>
                            <CSSIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"mx-1"}/>
                        </Project>
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="[Nifty-API]" image={niftyDogs} link="https://nifty-dogs-api.herokuapp.com/" github="https://github.com/adevlinb/lofty-backend" type="Featured Project" project="https://nifty-dogs-api.herokuapp.com/">
                            <PythonIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"mr-1"}/>
                            <DjangoIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"mx-1"}/>
                            <APIIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"ml-1"}/>
                        </Project>
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="[Nifty-Box]" image={niftyBox} link="https://codesandbox.io/s/nifty-dogs-sandbox-n2kdql" github="/" type="Featured Project" project="https://codesandbox.io/s/nifty-dogs-sandbox-n2kdql">
                            <CodeSandboxIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"mr-1"}/>
                            <ReactIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"mx-1"}/>
                            <JavascriptIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"ml-1"}/>
                        </Project>
                    </div>
                    <div className="col-span-12">
                        <FeaturedProject title="New Portfolio" summary="Take a peek at the tech and structure of my newest portfolio!" image={portfolio} link="/" github="https://github.com/adevlinb/portfolio2" type="Featured Project" project="/">
                            <TailWindIcon className={"scale-[65%]"} titleClass={"!mt-0"} divClass={"mx-2"}/>
                            <NextJsIcon className={"m-1 scale-75%]"} titleClass={"!mt-1"} divClass={"mr-1"}/>
                            <ReactIcon className={"scale-[75%]"} titleClass={"!mt-0"} divClass={"ml-1"}/>
                        </FeaturedProject>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

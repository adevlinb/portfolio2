import { motion } from "framer-motion";
import { MongoDbIcon, PostgresqlIcon, ReactIcon, NodeJSIcon, JavascriptIcon, HtmlIcon, PythonIcon, CSSIcon, APIIcon, DjangoIcon, DockerIcon, AWSIcon, ReadMeIcon, TailWindIcon, CodeSandboxIcon, NextJsIcon } from "./Icons";

const Skill = ({children, x, y}) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full absolute hover:underline
            font-semibold bg-light text-dark border-dark border-[1.5px] shadow-dark cursor-pointer
            px-5 py-2.5 dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 
             xs:text-dark xs:dark:text-light xs:font-bold"
        whileHover={{scale:1.5}}
        initial={{x:0, y:0}}
        viewport={{once:true}}
        whileInView={{x:x, y:y, transition: {duration: 3} }}>
            {children}
        </motion.div>
    )
}

export default function Skills() {
    return (
        <div>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full 
                bg-circularDark dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
                lg:bg-circularDarkLg lg:dark:bg-circularDarkLg
                md:bg-circularDarkMd md:dark:bg-circularDarkMd
                sm:bg-circularDarkSm sm:dark:bg-circularDarkSm'>
                <Skill x="0vw" y="0vw"><JavascriptIcon className={"!h-5"} divClass={"bg-white"}/></Skill>
                <Skill x="-23vw" y="2vw"><MongoDbIcon className={"!h-5"}/></Skill>
                <Skill x="-7.5vw" y="28vw"><TailWindIcon  className={"!h-5"} /></Skill>
                <Skill x="-9vw" y="14vw"><ReactIcon className={"!h-5"} /></Skill>
                <Skill x="20.5vw" y="8vw"><NodeJSIcon className={"!h-5"} /></Skill>
                <Skill x="-16vw" y="-16vw"><HtmlIcon className={"!h-5"} /></Skill>
                <Skill x="14vw" y="-11vw"><PythonIcon className={"!h-5"} /></Skill>
                <Skill x="29vw" y="-4.5vw"><CSSIcon className={"!h-5"} /></Skill>
                <Skill x="0vw" y="-19vw"><APIIcon className={"!h-5"} /></Skill>
                <Skill x="-25.5vw" y="21.5vw"><DjangoIcon className={"!h-5"} /></Skill>
                <Skill x="9.5vw" y="18.5vw"><DockerIcon className={"!h-5"} /></Skill>
                <Skill x="25vw" y="25vw"><AWSIcon className={"!h-5"} /></Skill>
                <Skill x="-32vw" y="-13.5vw"><ReadMeIcon className={"!h-5"} /></Skill>
                <Skill x="24.5vw" y="-24.5vw"><PostgresqlIcon className={"!h-5"} /></Skill>
                <Skill x="-18.5vw" y="-27.5vw"><CodeSandboxIcon className={"!h-5"} /></Skill>
                <Skill x="5vw" y="-28.5vw"><NextJsIcon className={"!h-5"} /></Skill>
            </div>
        </div>
    )
}

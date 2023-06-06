import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, address, children}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center end", "center center"]
    })

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <LiIcon reference={ref} scrollYProgress={scrollYProgress}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-medium text-2xl sm:text-xl xs:text-lg'>{position}</h3>
                <div className="flex items-center">
                    <a href={companyLink} target="_blank" className='text-primary text-lg font-bold capitalize dark:text-primaryDark'> {company}</a>
                    <h3 className='capitalize font-medium text-dark/75 ml-4 dark:text-light/75 xs:text-sm'>{time}</h3>
                </div>
                <h3>{address}</h3>
                <div>
                    {children}
                </div>
            </motion.div>
        </li>
    )
}

export default function Experience() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{scaleY: scrollYProgress}} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[29px] xs:left-[20px]'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details position="Software Engineer" company="Hack4LA" companyLink="https://www.hackforla.org/" time="03/23 - Present" address="Los Angeles, California">
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="!font-xs font-light">Website Team - hackforla.org.</p></div>
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Full Stack Developer, working remotely across teams to complete design issues using Kanban and continuous integration/continuous delivery (CI/CD) methodology.</p></div>
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Contribute to open-source Hack for LA website repository through issue completion, code review.</p></div>
                        
                    </Details>
                    <Details position="Software Engineering Associate" company="General Assembly" companyLink="https://generalassemb.ly/" time="06/22 - Present" address="Los Angeles, California" work="awesome description here">
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Guided over 90 students through the rigorous transformational journey of becoming a full stack software developer.</p></div>
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Provide hands-on instruction in a safe, supportive, and energetic environment; welcoming students with diverse needs and learning styles.</p></div>
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Selected as part of the instructional team for the blended learning pilot program.</p></div>
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Leverage strong communication skills while educating students in developing Full Stack applications</p></div>
                        
                        
                        
                        
                    </Details>
                    <Details position="Software Engineering Fellow" company="General Assembly" companyLink="https://generalassemb.ly/" time="12/21 - 03/22" address="Los Angeles, California" work="awesome description here">
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Hands-on experience w/ multiple programming languages, frameworks, libraries, and database types. Executed app planning via wire-framing, ERD-diagramming, and user-story implementation of features.</p></div>
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Developed MERN Stack Application to bring book-lovers together.</p></div>
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Created Django/Python/Postgresql Application for planning events, uploading recipes, and sharing / voting upon recipes for event.</p></div>
                        <div className="flex"><span className="font-bold mr-4">•</span><p className="font-xs font-light">Project manager in three-person team Git-Hub workflow environment.</p></div>
                    </Details>
                </ul>
            </div>
        </div>
    )
}

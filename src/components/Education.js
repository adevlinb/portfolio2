import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, children }) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center end", "center center"]
    })

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <LiIcon reference={ref} scrollYProgress={scrollYProgress}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-semibold text-xl sm:text-lg xs:text-lg'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {place}</span>
                {children}
            </motion.div>
        </li>
    )
}

export default function Education() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{scaleY: scrollYProgress}} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[29px] xs:left-[20px]'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
                    <Details type="Software Engineering Certificate" time="2022-2023" place="App Academy">
                        <p className="font-light text-md"> Completed App Academy&apos;s open 450 hour open course where I expanded upon existing knowledge to further my career path in software engineering! New tech included Docker, Flask w/ SQLAlchemy, express with sql and sequelize orm, React with Redux, Testing with Mocha, Microservices and more! Truly enjoyed working through this program and continuing to build and grow as an engineer!</p>
                    </Details>
                    <Details type="Software Engineering Intensive" time="2021-2022" place="General Assembly">
                        <p className="font-light text-md">420-hour immersive program where I acquired hands-on experience with multiple programming languages, frameworks, libraries, and database types, executing app planning via wire-framing, ERD-diagramming, and (AAU) user-story implementation of features for agile web development practices.</p>
                    </Details>
                    <Details type="Master's in Landscape Architecture" time="2008-2011" place="Louisiana State University" info="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding." >
                        <p>Consistently named among the top programs for Landscape Architecture in the country, LSU&apos;s LA program was an eye opening experience for me. Learning how to express art and design concepts through physical and digital materials and ultimately, developing those concepts, and turning them into complete projects with more precise measurements was an intense and rewarding process.</p>
                    </Details>
                    <Details type="Bachelor's in Urban Studies" time="2003-2007" place="University of New Orleans">
                        <p>Before my college career began, a friend and I started talking about and researching how New Orleans became the city that it is. Pouring over maps, reading articles, looking at photographs, projects, and policy painted a picture of how the city grew. Learning that I could help shape a city, a people, and their experiences through tools like policy, planning, and decision-making blew my mind. And ultimately became my first career interest.</p>
                    </Details>
                </ul>
            </div>
        </div>
    )
}

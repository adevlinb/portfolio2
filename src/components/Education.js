import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center end", "center center"]
    })

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} scrollYProgress={scrollYProgress}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {place}</span>
                <p className='font-medium w-full md:text-sm'>{info}</p>
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
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details type="Software Engineering Certificate" time="2022-2023" place="General Assembly" info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering." />
                    <Details type="Software Engineering Intensive" time="2021-2022" place="General Assembly" info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering." />
                    <Details type="Master Of Arts in Landscape Architecture" time="2008-2011" place="Louisiana State University" info="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding." />
                    <Details type="Bachelor Of Science In Urban Studies" time="2003-2007" place="University of New Orleans" info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence." />
                </ul>
            </div>
        </div>
    )
}

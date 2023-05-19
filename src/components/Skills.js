import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {
    return (

        <motion.div
        className="flex items-center justify-center rounded-full absolute
        font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
        py-3 px-6"
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        viewport={{once:true}}
        transition={{duration:5}}
        whileInView={{x:x, y:y}}>
            {name}
        </motion.div>
    )
}

export default function Skills() {
    return (
        <div>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>
            Skills
        </h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <Skill name="WEB" x="" y=""/>
            <Skill name="SKILL" x="-22vw" y="2vw"/>
            <Skill name="SKILL" x="-5vw" y="-10vw"/>
            <Skill name="SKILL" x="0vw" y="12vw"/>
            <Skill name="SKILL" x="20vw" y="6vw"/>
            <Skill name="SKILL" x="-20vw" y="-15vw"/>
            <Skill name="SKILL" x="15vw" y="-12vw"/>
            <Skill name="SKILL" x="32vw" y="-5vw"/>
            <Skill name="SKILL" x="0vw" y="-20vw"/>
            <Skill name="SKILL" x="-25vw" y="18vw"/>
            <Skill name="SKILL" x="18vw" y="18vw"/>
        </div>

    </div>
  )
}

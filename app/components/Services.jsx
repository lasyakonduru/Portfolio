import { serviceData } from "@/assets/assets"
import { motion } from "motion/react"
import Image from "next/image"

const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1 ,y: 0 }}
        transition={{duration:0.5,delay: 0.3 }}
        className="text-center mb-2 text-lg
        font-Ovo">Professional Highlights</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1 ,y: 0 }}
        transition={{duration:0.5,delay: 0.5 }}
        className="text-center text-5xl font-Ovo">
        Experience & Internships</motion.h2>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1  }}
        transition={{duration:0.5,delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">As a computer science graduate student, I’ve gained hands-on experience through internships and academic projects involving full-stack development, DevOps, cloud deployment, and workflow automation.
             I’m eager to apply my skills in real-world engineering teams.</motion.p>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1  }}
        transition={{duration:0.6,delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10">
            {serviceData.map(({icon,title,description,skillsAndTools}, index)=>(
                <motion.div 
                whileHover={{scale: 1.05}}
                key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                    <Image src={icon} alt='' className="w-10"/>
                    <h3 className="text-lg my-4 text-gray-700 whitespace-pre-line dark:text-white">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description} </p>
                    <p className="text-sm text-gray-700 font-semibold mt-5 dark:text-white">
      <span className="font-bold">Skills & Tools used:</span> {skillsAndTools.join(', ')}
    </p>

                </motion.div>

            ))}

        </motion.div>

    </motion.div>
  )
}

export default Services
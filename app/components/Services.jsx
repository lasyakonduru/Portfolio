import { serviceData } from "@/assets/assets"
import Image from "next/image"

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className="text-center mb-2 text-lg
        font-Ovo">Professional Highlights</h4>
        <h2 className="text-center text-5xl font-Ovo">
        Experience & Internships</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">As a computer science graduate student, I’ve gained hands-on experience through internships and academic projects involving full-stack development, DevOps, cloud deployment, and workflow automation.
             I’m eager to apply my skills in real-world engineering teams.</p>
        <div className="grid grid-cols-auto gap-6 my-10">
            {serviceData.map(({icon,title,description,skillsAndTools}, index)=>(
                <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
                    <Image src={icon} alt='' className="w-10"/>
                    <h3 className="text-lg my-4 text-gray-700 whitespace-pre-line">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5">{description} </p>
                    <p className="text-sm text-gray-700 font-semibold mt-5">
      <span className="font-bold">Skills & Tools used:</span> {skillsAndTools.join(', ')}
    </p>

                </div>

            ))}

        </div>

    </div>
  )
}

export default Services
import { workData } from "@/assets/assets"

const Work = () => {
  return (
    <div id ='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className="text-center mb-2 text-lg
        font-Ovo">My portfolio</h4>
        <h2 className="text-center text-5xl font-Ovo">
        My latest projects</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            Explore my collection of projects. Each project 
            showcases my skills in React, DevOps, and Agile software development.</p>
    <div>
        {workData.map((project,index)=>(
            <div key={index}>

            </div>


        ))}

    </div>
    </div>
  )
}

export default Work
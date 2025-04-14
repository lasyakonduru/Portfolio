import { assets } from '@/assets/assets';
import Image from 'next/image';

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-10'>
        <div className='text-center'>
            <Image src={assets.logo} alt="" className='w-36 mx-auto'/>

            <div className='w-max flex ietms-center gap-2 mx-auto -mt-8'>
                <Image src={isDarkMode ?  assets.mail_icon_dark : assets.mail_icon} alt="" className='w-10'/>
                sineen.0509@gmail.com
            </div>
        </div>


    <div className='text-center sm:flex items-center justify-between border-t 
    border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© April 13th, 2025 Sameera Sineen. All rights reserved.</p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0' >
            <li>
                <a target="_blank"  href="https://github.com/Sameera-05">GitHub</a>
            </li>
            <li>
                <a target="_blank"  href="https://www.linkedin.com/in/sameera-sineen-42414b198/">LinkedIn</a>
            </li>
            
        </ul>

    </div>    


    </div>
  )
}

export default Footer
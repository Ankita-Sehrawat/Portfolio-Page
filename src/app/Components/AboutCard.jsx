import React from 'react'

const AboutCard = () => {
    return (
        <div>
            <h1 className="text-lg sm:text-[32px] font-semibold text-white mb-2 sm:mb-5">About Me</h1>
            <p className="text-xs sm:text-base font-normal text-white/80  tracking-[3px] pb-5 lg:pb-11 ">
                I am a  Front-End Developer skilled  in HTML, CSS, JavaScript, and React.js, with a focus on creating user-friendly interfaces. Successfully collaborated with a team to boost user engagement and implemented dynamic web solutions.
            </p>

            <div className='flex gap-6 flex-col lg:flex-row xl:justify-between  lg:py-5 max-lg:h-[250px] max-lg:overflow-y-scroll'>
                <div className='flex gap-5 min-[400px]:gap-20 lg:gap-5 sm:w-11/12 lg:w-5/12'>
                    <div className=' flex flex-col gap-[30px] '>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Name</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Experience</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Nationality</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Freelance</p>
                    </div>
                    <div className=' flex flex-col gap-[30px]'>
                        <p className='text-[#15FFEA] text-base sm:text-xl font-medium tracking-[2px]  '>Ankita </p>
                        <p className='text-[#15FFEA] text-base sm:text-xl font-medium tracking-[2px]  '>1 Year</p>
                        <p className='text-[#15FFEA] text-base sm:text-xl font-medium tracking-[2px]  '>Indian</p>
                        <p className='text-[#15FFEA] text-base sm:text-xl font-medium tracking-[2px]  '>Available</p>
                    </div>
                </div>

                <div className='flex max-[400px]:gap-5 gap-20 lg:gap-5 sm:w-11/12 lg:w-6/12'>
                    <div className='flex flex-col gap-[30px] '>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Phone</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Email</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Location</p>
                        <p className='text-white font-normal text-lg tracking-[2px]  '>Language</p>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <p className='text-[#15FFEA] text-base sm:text-xl font-medium tracking-[2px]  '>+91 9350471322</p>
                        <p className='text-[#15FFEA] text-base sm:text-xl font-medium tracking-[1px]  '>sehrawatankita1@gmail.com</p>
                        <p className='text-[#15FFEA] text-base sm:text-xl font-medium tracking-[2px]  '>Hisar,Haryana</p>
                        <p className='text-[#15FFEA] text-base sm:text-xl font-medium tracking-[2px]  '>Hindi and English</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutCard

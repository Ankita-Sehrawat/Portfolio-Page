import React from 'react'
import { RoadmapDot } from './Icon'

const EduCard = () => {
    return (
        <div>
            <h1 className="text-lg sm:text-[32px] font-semibold text-white mb-2 sm:mb-5 ">My Education</h1>
            <p className="text-xs sm:text-base font-normal text-white/80 lg:w-[534px] tracking-[3px] pb-5 lg:pb-11 ">
                Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum
                dolor sit amet consectetur. Aliquet elit dolor..
            </p>

            <div className='max-lg:h-[250px] h-[350px] overflow-y-scroll'>
                <div className='flex  '>
                    <div className='sm:w-6/12 ps-7 sm:px-[15px] relative roadmap_line sm:text-right '>
                        <div className='absolute top-[-5px] max-sm:left-[0px] -right-[10px] '><RoadmapDot /> </div>
                        <p className='text-[#15FFEA] font-normal tracking-[2px] text-base sm:text-xl mb-[10px] '>2021</p>
                        <div className='border-[2px] border-[#15FFEA] rounded-[20px] p-[10px_15px] bg-[#313131]   '>
                            <p className='font-medium text-white text-base sm:text-xl mb-[10px]  '>High School</p>
                            <p className='text-sm text-white/80 tracking-[1px] font-normal  '>Lorem ipsum dolor sit amet consectetur. At augue dignissim eu posuere non mi dictum lacus praesent. </p>
                        </div>
                    </div>
                    <div className='hidden sm:block  sm:w-6/12 px-[15px]'></div>
                </div>

                <div className='flex  '>
                    <div className='sm:w-6/12 px-[15px] relative roadmap_line '>
                        <div className='absolute top-0 max-sm:left-[0px] -right-[10px] max-sm:pt-7'><RoadmapDot /> </div>
                    </div>
                    <div className='sm:w-6/12 sm:px-[15px] text-left '>
                        <p className='text-[#15FFEA] font-normal tracking-[2px] text-base sm:text-xl mb-[10px] max-sm:pt-7 '>2022</p>
                        <div className='border-[2px] border-[#15FFEA] rounded-[20px] p-[10px_15px] bg-[#313131]   '>
                            <p className='font-medium text-white text-base sm:text-xl mb-[10px]  '>High School</p>
                            <p className='text-sm text-white/80 tracking-[1px] font-normal  '>Lorem ipsum dolor sit amet consectetur. At augue dignissim eu posuere non mi dictum lacus praesent. </p>
                        </div>
                    </div>
                </div>

                <div className='flex  '>
                    <div className='sm:w-6/12 ps-7 sm:px-[15px] relative roadmap_line sm:text-right '>
                        <div className='absolute top-0 max-sm:left-[0px] -right-[10px] max-sm:pt-7 '><RoadmapDot /> </div>
                        <p className='text-[#15FFEA] font-normal tracking-[2px] text-base sm:text-xl mb-[10px] max-sm:pt-7 '>2022</p>
                        <div className='border-[2px] border-[#15FFEA] rounded-[20px] p-[10px_15px] bg-[#313131]   '>
                            <p className='font-medium text-white text-base sm:text-xl mb-[10px]  '>High School</p>
                            <p className='text-sm text-white/80 tracking-[1px] font-normal  '>Lorem ipsum dolor sit amet consectetur. At augue dignissim eu posuere non mi dictum lacus praesent. </p>
                        </div>
                    </div>
                    <div className='hidden sm:block  sm:w-6/12 px-[15px]'></div>
                </div>

                <div className='flex  '>
                    <div className='sm:w-6/12 px-[15px] relative roadmap_line '>
                        <div className='absolute top-0 max-sm:left-[0px] -right-[10px] max-sm:pt-7'><RoadmapDot /> </div>
                    </div>
                    <div className='sm:w-6/12 sm:px-[15px] text-left '>
                        <p className='text-[#15FFEA] font-normal tracking-[2px] text-base sm:text-xl mb-[10px] max-sm:pt-7 '>2022</p>
                        <div className='border-[2px] border-[#15FFEA] rounded-[20px] p-[10px_15px] bg-[#313131]   '>
                            <p className='font-medium text-white text-base sm:text-xl mb-[10px]  '>High School</p>
                            <p className='text-sm text-white/80 tracking-[1px] font-normal  '>Lorem ipsum dolor sit amet consectetur. At augue dignissim eu posuere non mi dictum lacus praesent. </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EduCard

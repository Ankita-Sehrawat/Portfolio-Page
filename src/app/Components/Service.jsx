import React from 'react'
import { ServiceElp1, ServiceElp2, SpringBorder } from './Icon'
import { ServiceArr } from './Helper'
import astroImg from '../../../public/assets/images/png/astronaut_img.png'
import Image from 'next/image'

const Service = () => {
    return (
        <div id='service' className='relative py-12 lg:pt-[73px] lg:pb-10 '>
            <div className='container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  '>
                
                    <Image className='absolute top-[4%] min-[1400px]:top-[-10%] right-0 hidden xl:block z-[-1] ' src={astroImg} alt="img" />
                    <div className='absolute top-[140px] left-0 hidden xl:block '> <ServiceElp1 /> </div>
                    <div className='absolute bottom-0 right-0 hidden xl:block '> <ServiceElp2 /> </div>

               
                <div className='relative '>
                    <h1 className='text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-normal text-white mb-5 lg:mb-0  '>Services...</h1>
                    <div className='absolute top-[40px] sm:top-[50px] sm:left-[200px] z-[-1] lg:top-[70px] left-[144px] md:left-[28%]  '>
                        <SpringBorder />
                    </div>
                </div>
                <div className='flex flex-wrap justify-center sm:mx-5 lg:mx-10 '>
                    {ServiceArr.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className="max-[400px]:w-full w-11/12 sm:w-6/12 sm:px-[10px] lg:px-5"
                          >
                            <div className="max-[400px]:p-0 p-[15px_20px] lg:p-[20px_40px] xl:p-[30px_40px] ">
                              <h1 className="max-[400px]:text-5xl  text-[60px] lg:text-[70px] font-normal text-white/80 ff_roadRage mb-2 xl:mb-5  leading-[50px] lg:leading-[77px] mt-3 sm:mt-0 ">
                                {item.num}{" "}
                              </h1>
                              <p className="font-semibold max-[400px]:text-xl text-2xl lg:text-[32px] text-white mb-2 xl:mb-5 ">
                                {item.title}
                              </p>
                              <p className="text-base lg:text-lg font-normal text-white/80 mb-2 xl:mb-5 ">
                                {item.description}
                              </p>
                              <div className="border-b border-[#FFFFFF66]  "></div>
                            </div>
                          </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service

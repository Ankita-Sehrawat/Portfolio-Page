import React from "react";
import { DotGreenIcon } from "./Icon";
import { ExpCard } from "./Helper";

const CardExp = () => {
  return (
    <div>
      <h1 className="text-lg sm:text-[32px] font-semibold text-white mb-2 sm:mb-5 ">
        My Experience
      </h1>
      <p className="text-xs sm:text-base  font-normal text-white/80 lg:w-[534px] tracking-[3px] pb-5 lg:pb-11 ">
        Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum
        dolor sit amet consectetur. Aliquet elit dolor..
      </p>
      <div className="flex flex-wrap -mx-[10px] justify-center max-lg:h-[250px] max-lg:overflow-y-scroll ">
        {ExpCard.map((item, index) => {
          return (
            <div key={index} className="w-full sm:w-10/12 lg:w-6/12 px-[10px] mb-5">
              <div className="bg-[#313131] rounded-[10px] p-5   ">
                <p className="text-sm sm:text-lg font-normal text-[#15FFEA]  ">
                  {item.Year}
                </p>
                <h1 className="text-white font-semibold text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] my-[10px]">
                  {item.course}
                </h1>
                <div className="flex gap-[10px] items-center ">
                  <DotGreenIcon />
                  <p className="text-sm sm:text-lg font-normal text-[#15FFEA] ">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardExp;

{
  /* <div className='bg-[#313131] rounded-[10px] p-5 w-6/12  '>
<p className='text-lg font-normal text-[#15FFEA]  '>2020 - 2021</p>
<h1 className='text-white font-semibold text-[32px] my-[10px]'>Full Stack Developer</h1>
<div className='flex gap-[10px] items-center '>
<DotGreenIcon/>
<p className='text-lg font-normal text-[#15FFEA]  '> Hexabirds Pvt. Ltd</p>
</div>
</div> */
}

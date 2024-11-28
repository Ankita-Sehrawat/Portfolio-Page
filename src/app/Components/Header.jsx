"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleMenu]);

  return (
    <section>
      <div className="container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5">
        <div className="pt-[34px] pb-9 flex items-center justify-between">
          <div className="md:w-3/12 min-[1130px]:w-2/12">
            <a className="text-xl sm:text-[32px] font-normal text-white " href="#">
              Vikas Boora
            </a>
          </div>
          <div
            className={` md:w-9/12 min-[1130px]:w-7/12 max-md:h-screen max-md:fixed top-0  w-screen max-md:bg-black max-md:z-10 max-md:flex items-center justify-center duration-300 ${toggleMenu ? "left-0" : "-left-full"
              }`}
          >
            <ol className="flex flex-col md:flex-row items-center gap-6 lg:gap-[50px] justify-end  ">
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  className="text-base font-normal text-white relative after:absolute after:w-0 after:h-0.5 after:bg-[#15FFEA] after:-bottom-1 after:left-1/2 after:hover:w-full hover:text-[#15FFEA] after:hover:left-0 duration-300 after:duration-300"
                  href="#home "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  className="text-base font-normal text-white relative after:absolute after:w-0 after:h-0.5 after:bg-[#15FFEA] after:-bottom-1 after:left-1/2 after:hover:w-full hover:text-[#15FFEA] after:hover:left-0 duration-300 after:duration-300 "
                  href="#service"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  className="text-base font-normal text-white relative after:absolute after:w-0 after:h-0.5 after:bg-[#15FFEA] after:-bottom-1 after:left-1/2 after:hover:w-full hover:text-[#15FFEA] after:hover:left-0 duration-300 after:duration-300 "
                  href="#resume"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  className="text-base font-normal text-white relative after:absolute after:w-0 after:h-0.5 after:bg-[#15FFEA] after:-bottom-1 after:left-1/2 after:hover:w-full hover:text-[#15FFEA] after:hover:left-0 duration-300 after:duration-300 "
                  href="#work"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  className="text-base font-normal text-white relative after:absolute after:w-0 after:h-0.5 after:bg-[#15FFEA] after:-bottom-1 after:left-1/2 after:hover:w-full hover:text-[#15FFEA] after:hover:left-0 duration-300 after:duration-300 "
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <button className="text-base font-normal text-[#15FFEA] border border-[#15FFEA] p-[10px_20px] rounded-[50px]  duration-300 hover:duration-300 hover:bg-[#15FFEA] hover:text-black ">
                  Hire me
                </button>
              </li>
            </ol>
          </div>

          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="w-6 h-5 flex flex-col justify-between duration-300 md:hidden z-[11] cursor-pointer"
          >
            <span
              className={`w-full border-[2px] border-white duration-300 bg-white ${toggleMenu ? "rotate-45 translate-y-[8.5px]" : ""
                }`}
            ></span>
            <span
              className={`w-full border-[2px] border-white duration-300 bg-white ${toggleMenu ? "-rotate-45" : ""
                }`}
            ></span>
            <span
              className={`w-full border-[2px] border-white duration-300 bg-white ${toggleMenu ? "opacity-0" : ""
                }`}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

{
  /* <ol className='flex items-center gap-[35px] lg:gap-[50px] justify-end  '>
<li>
    <a className='text-base font-normal text-white relative after:absolute after:w-full after:h-1 after:bottom-0 after:left-0 after:bg-[#15ffea] after:text-[#15ffea] after:transition-all  ' href="">Home</a>
</li>
<li>
    <a className='text-base font-normal text-white hover:text-[#15FFEA] hover:border-b hover:border-[#15FFEA]  ' href="">Service</a>
</li>
<li>
    <a className='text-base font-normal text-white hover:text-[#15FFEA] hover:border-b hover:border-[#15FFEA]  ' href="">Resume</a>
</li>
<li>
    <a className='text-base font-normal text-white hover:text-[#15FFEA] hover:border-b hover:border-[#15FFEA]  ' href="">Work</a>
</li>
<li>
    <a className='text-base font-normal text-white hover:text-[#15FFEA] hover:border-b hover:border-[#15FFEA]  ' href="">Contact</a>
</li>
<li>
    <button className='text-base font-normal text-black    bg-[#15FFEA] p-[10px_20px] rounded-[50px] '>Hire me</button>
</li>
</ol> */
}

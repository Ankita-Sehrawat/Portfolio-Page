/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from 'react'
import { FooterBottomElp, FooterRightElp } from './Icon';

const Connect = () => {
    const [connectFormData, setConnectFormData] = useState({
        fname: "",
        email: "",
        phone: "",
        subject: "",
        msg: ""
    })
    function onchangeConnectForm(e) {
        setConnectFormData({ ...connectFormData, [e.target.name]: e.target.value })
    }

    function submitConnectForm(e) {
        e.preventDefault()
        console.log(connectFormData)
        setConnectFormData({
            fname: "",
            email: "",
            phone: "",
            subject: "",
            msg: ""
        })
    }
    useEffect(() => {
        submitConnectForm
    }, [])

    return (
        <div id='contact' className='relative max-sm:mt-[-120px] max-lg:py-12 pt-[78px] pb-[91px] '>
            <div className='container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  '>
                <div className='absolute bottom-0 left-[70px] hidden lg:block -z-10 '><FooterBottomElp /> </div>
                <div className='absolute top-[20%] right-0 hidden lg:block -z-10 '><FooterRightElp /> </div>

                <h1 className='text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-normal text-white mb-2 sm:mb-[18px]   '>Let's Connect!</h1>
                <p className='text-lg font-normal text-[#FFFFFFCC] lg:w-[663px] '>Feel free to reach out for collaborations, projects, or just to say hi. I'm always open to new opportunities and interesting conversations. Drop me a message, and I'll get back to you as soon as possible!</p>

                <form onSubmit={submitConnectForm} className='flex flex-col sm:flex-row sm:mx-2.5 xl:-mx-[25px] mt-10 lg:mt-[99px]'>
                    <div className='w-full sm:w-6/12 sm:px-2.5 xl:px-[25px]'>
                        <div className='lg:p-[30px]'>
                            <input className='border border-[#313131] rounded-[10px] p-[13px_10px] bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full mb-5  '
                                type="text"
                                name='fname'
                                placeholder='Full Name'
                                value={connectFormData.fname}
                                onChange={onchangeConnectForm}
                                required
                            />
                            <input className='border border-[#313131] rounded-[10px] p-[13px_10px] bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full mb-5  '
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={connectFormData.email}
                                onChange={onchangeConnectForm}
                                required
                            />
                            <input className='border border-[#313131] rounded-[10px] p-[13px_10px] bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full mb-5  '
                                type="text"
                                name='phone'
                                placeholder='Phone Number'
                                value={connectFormData.phone}
                                onChange={onchangeConnectForm}
                                required
                            />
                            <input className='border border-[#313131] rounded-[10px] p-[13px_10px] bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full   '
                                type="text"
                                name='subject'
                                placeholder='Subject'
                                value={connectFormData.subject}
                                onChange={onchangeConnectForm}
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 sm:px-2.5 xl:px-[25px] py-[20px] '>
                        <textarea className='border border-[#313131] rounded-[10px] p-5 bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full xl:w-[580px] h-[235px] tracking-[2px] '
                            name="msg"
                            id="msg"
                            placeholder='Your Message'
                            value={connectFormData.msg}
                            onChange={onchangeConnectForm}
                            required

                        ></textarea>
                        <div className='text-center'>
                            <button type='submit' className='bg-[#15FFEA] text-base font-normal text-[#080808] rounded-[10px] p-[10px_20px] mt-5  '>Send Message</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Connect

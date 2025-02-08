"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FooterBottomElp, FooterRightElp } from './Icon';

const Connect = () => {
    const [connectFormData, setConnectFormData] = useState({
        fname: "",
        email: "",
        phone: "",
        subject: "",
        msg: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    function onchangeConnectForm(e) {
        setConnectFormData({ ...connectFormData, [e.target.name]: e.target.value });
    }

    async function submitConnectForm(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        // EmailJS Service Details
        const serviceId = "service_1jxk92a";
        const templateId = "template_cklirrh";
        const publicKey = "gnK8XPd3VdHcNbKGl";

        const templateParams = {
            from_name: connectFormData.fname,
            from_email: connectFormData.email,
            phone: connectFormData.phone,
            subject: connectFormData.subject,
            message: connectFormData.msg,
            to_email: "sehrawatankita1@gmail.com",
        };

        try {
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log("EmailJS Response:", response);
            setMessage("Message sent successfully!");
            setConnectFormData({
                fname: "",
                email: "",
                phone: "",
                subject: "",
                msg: ""
            });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setMessage(`Failed to send message`);
        }

        setIsSubmitting(false);
    }

    return (
        <div id='contact' className='relative  max-lg:py-12 pt-[78px] pb-[91px] '>
            <div className='container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5'>
                <div className='absolute bottom-0 left-[70px] hidden lg:block -z-10'><FooterBottomElp /></div>
                <div className='absolute top-[20%] right-0 hidden lg:block -z-10'><FooterRightElp /></div>

                <h1 className='text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-normal text-white mb-2 sm:mb-[18px]'>Let's Connect!</h1>
                <p className='text-lg font-normal text-[#FFFFFFCC] lg:w-[663px]'>Feel free to reach out for collaborations, projects, or just to say hi. I'm always open to new opportunities and interesting conversations. Drop me a message and I'll get back to you as soon as possible!</p>

                <form onSubmit={submitConnectForm} className='flex flex-col sm:flex-row sm:mx-2.5 xl:-mx-[25px] mt-10 lg:mt-[99px]'>
                    <div className='w-full sm:w-6/12 sm:px-2.5 xl:px-[25px]'>
                        <div className='lg:p-[30px]'>
                            <input className='border border-[#313131] rounded-[10px] p-[13px_10px] bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full mb-5'
                                type="text"
                                name='fname'
                                placeholder='Full Name'
                                value={connectFormData.fname}
                                onChange={onchangeConnectForm}
                                required
                            />
                            <input className='border border-[#313131] rounded-[10px] p-[13px_10px] bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full mb-5'
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={connectFormData.email}
                                onChange={onchangeConnectForm}
                                required
                            />
                            <input className='border border-[#313131] rounded-[10px] p-[13px_10px] bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full mb-5'
                                type="text"
                                name="phone"
                                placeholder='Phone Number'
                                value={connectFormData.phone}
                                onChange={onchangeConnectForm}
                                required
                            />
                            <input className="border border-[#313131] rounded-[10px] p-[13px_10px] bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={connectFormData.subject}
                                onChange={onchangeConnectForm}
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 sm:px-2.5 xl:px-[25px] py-[20px]'>
                        <textarea className='border border-[#313131] rounded-[10px] p-5 bg-transparent text-base placeholder:text-[#FFFFFF99] font-normal outline-none focus:border-[#15FFEA] text-[#15FFEA] w-full xl:w-[580px] h-[235px] tracking-[2px]'
                            name="msg"
                            id="msg"
                            placeholder='Your Message'
                            value={connectFormData.msg}
                            onChange={onchangeConnectForm}
                            required
                        ></textarea>
                        <div className='text-center'>
                            <button type='submit' className='bg-[#15FFEA] text-base font-normal text-[#080808] rounded-[10px] p-[10px_20px] mt-5' disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </div>
                </form>
                {message && <p className='text-center text-white mt-3 text-xl '>{message}</p>}
            </div>
        </div>
    );
}

export default Connect;



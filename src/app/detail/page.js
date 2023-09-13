"use client"
import React from 'react';
import Image from 'next/image';
import { Detailnav } from '@/components';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);
function Page()
{
    return (
        <div className='mt-20 mx-10'>
            <Detailnav title="iPhone 14 Pro" price="67.000 ₺" />
            <div className='flex flex-row'>
                <div className='w-2/3 border-r'>
                    <Swiper spaceBetween={30} slidesPerView={1} autoplay={{ delay: 2500, disableOnInteraction: false }} navigation={true} loop={true}>
                        <SwiperSlide >
                            <Image src="/" alt="Slide 1" width={100} height={50} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/" alt="Slide 2" width={100} height={50} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/" alt="Slide 1" width={100} height={50} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/" alt="Slide 1" width={100} height={50} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/" alt="Slide 1" width={100} height={50} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/" alt="Slide 1" width={100} height={50} />
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div className='w-1/3 py-5 px-8'>
                    <h2 className='text-4xl font-semibold opacity-90'>İphone 14 Pro</h2>
                    <div className='mt-20'>
                        <h4 className='text-2xl font-semibold opacity-80'>Pick your favorite.</h4>
                        <p className='text-xl my-5 font-medium'>
                            Color - <span className='font-normal'>Blue</span>
                        </p>
                        <div className='flex gap-4 '>
                            <div className='w-10 h-10 rounded-full bg-[#aabbcd] shadow-inset-shadow cursor-pointer'></div>
                            <div className='w-10 h-10 rounded-full bg-[#e5ddea] shadow-inset-shadow cursor-pointer'></div>
                            <div className='w-10 h-10 rounded-full bg-[#fff596] shadow-inset-shadow cursor-pointer'></div>
                            <div className='w-10 h-10 rounded-full bg-[#2c333b] shadow-inset-shadow cursor-pointer'></div>
                            <div className='w-10 h-10 rounded-full bg-[#faf7f2] shadow-inset-shadow cursor-pointer'></div>
                            <div className='w-10 h-10 rounded-full bg-[#fd2441] shadow-inset-shadow cursor-pointer'></div>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <h4 className='text-2xl font-semibold opacity-80'>Storage. <span className='opacity-70'>How much space do you need?</span></h4>
                        <div className='flex w-4/5 items-center py-4 px-2 border border-[#0000007e] rounded-xl justify-between mt-4 cursor-pointer'>
                            <div>
                                <p className='font-semibold text-xl'>128<small>GB</small> </p>
                            </div>
                            <div className='flex flex-col text-xs'>
                                <p className=''>From $1199</p>
                                <p className=''>or $49.95/mo.</p>
                                <p className=''>for 24 mo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Page;

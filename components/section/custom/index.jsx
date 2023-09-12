"use client"
import React from 'react'
import { useState } from 'react';
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { FaArrowDownWideShort, FaArrowDownShortWide, FaArrowRightArrowLeft } from 'react-icons/fa6';


function Index()
{
    const [order, setOrder] = useState("open");
    const orderOpen = (order) =>
    {
        setOrder(order);
    }
    const [layout, setLayout] = useState(3);

    const changeLayout = (layout) =>
    {
        setLayout(layout);
    }

    return (
        <div>
            <div className='flex justify-start lg:justify-end border-b pb-2 mb-3'>
                <div onClick={() => orderOpen("hidden")} className='w-1/6 items-center flex flex-col'>
                    <div className='flex justify-evenly w-full items-center opacity-80 p-2 rounded cursor-pointer'>
                        <p className='text-xl font-semibold  '>Sırala</p>
                        <FaArrowRightArrowLeft size={20} className=' rotate-90' />
                    </div>
                    <div className={`w-full ${order === "hidden" ? 'inline' : 'hidden'}`}>
                        <div className='flex w-full justify-between px-4 items-center text-lg font-medium opacity-80 cursor-pointer  my-2 p-1'>
                            <p>Growing</p>
                            <FaArrowDownShortWide className='cursor-pointer' />
                        </div>
                        <hr className='w-2/3 mx-auto bg-black' />
                        <div className='flex w-full justify-between px-4 items-center text-lg font-medium opacity-80 cursor-pointer my-2  p-1'>
                            <p>Decreasing</p>
                            <FaArrowDownWideShort className='cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className=' ml-5 flex justify-end p-2'>
                        <TfiLayoutGrid2Alt size={30} className={`cursor-pointer ${layout == 2 ? 'opacity-100' : 'opacity-20'}`} onClick={() => changeLayout(2)}
                        />
                        <TfiLayoutGrid3Alt size={30} className={`ml-2 cursor-pointer ${layout == 3 ? 'opacity-100' : 'opacity-20'}`} onClick={() => changeLayout(3)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
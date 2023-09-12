"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

function Index({ data })
{
    const [activeImage, setActiveImage] = useState(0)

    const changeImageColor = (imageIndex) =>
    {
        setActiveImage(imageIndex);
    }

    return (
        <div className='w-full bg-default-bg rounded-2xl border shadow-shadow-2'>
            <div className='w-full h-80 rounded-lg rounded-t-2xl'>
                <Image
                    src={data.colors[activeImage].image}
                    width={400}
                    height={300}
                    className='rounded-t-2xl object-cover w-full h-full'
                    alt="iPhone 14"
                />
            </div>
            <div className='mt-1 flex justify-center gap-2'>
                {data.colors.map((item, index) => (
                    <div
                        onClick={() => changeImageColor(index)} // Renk değiştirme işlevini düzgün çağırın
                        className={`w-8 h-8 rounded-full bg-[${item.color}] border cursor-pointer`}
                        key={index}
                    ></div>
                ))}
            </div>
            <div className='my-5 flex justify-center gap-2'>
                {data.memory.map((item, index) => (
                    <p
                        className='px-3 py-1 border border-[#00000031] rounded-3xl cursor-pointer'
                        key={index}
                    >
                        {item.gb} GB
                    </p>
                ))}
            </div>
            <div>
                <h1 className='text-center text-2xl font-bold mt-2'>{data.name}</h1>
            </div>
            <div>
                <h3 className='text-center text-2xl font-bold mt-2 opacity-70'>{data.memory[0].price} $</h3>
            </div>
            <div className='py-8 text-center'>
                <Link href='/' className='w-full bg-[#0071e3] text-center text-white font-semibold px-5 py-2 rounded-2xl'>
                    Open Detail
                </Link>
            </div>
        </div>
    )
}

export default Index

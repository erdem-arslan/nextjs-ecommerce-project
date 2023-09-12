"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Spinner } from '@/components'

function Index({ data })
{
    const [activeImage, setActiveImage] = useState(0)
    const [selectedMemoryIndex, setSelectedMemoryIndex] = useState(0)
    const [loading, setLoading] = useState(false)

    const changeImageColor = (imageIndex) =>
    {
        setActiveImage(imageIndex)
    }

    const selectMemory = (memoryIndex) =>
    {
        setLoading(true) // Spinner'ı görüntüle

        // Fiyat güncellemesi burada yapılabilir (API çağrısı veya başka bir işlem).

        setTimeout(() =>
        {
            setSelectedMemoryIndex(memoryIndex)
            setLoading(false) // Spinner'ı gizle
        }, 600)
    }

    useEffect(() =>
    {
        setSelectedMemoryIndex(0)
    }, [])

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
                        onClick={() => changeImageColor(index)}
                        className={`w-10 h-10 rounded-full border cursor-pointer shadow-inset-shadow`}
                        key={index}
                        style={{ backgroundColor: `${item.color}` }}
                    ></div>
                ))}
            </div>
            <div className='my-5 flex justify-center gap-2'>
                {data.memory.map((item, index) => (
                    <p
                        onClick={() => selectMemory(index)}
                        className={`px-3 py-1 border border-[#00000031] hover:bg-[#0066cc0e] rounded-3xl cursor-pointer ${index === selectedMemoryIndex ? 'bg-[#2676c7fd] text-white hover:bg-[#2676c7fd] ' : ''
                            }`}
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
                {loading ? (
                    <div className="flex justify-center mt-2">
                        <Spinner /> {/* Spinner'ı göster */}
                    </div>
                ) : (
                    <h3 className='text-center text-2xl font-bold mt-2 opacity-70'>
                        {data.memory[selectedMemoryIndex].price} $
                    </h3>
                )}
            </div>
            <div className='py-8 text-center'>
                <Link href='/' className='w-full bg-[#06c] hover:bg-[#0066ccb6] text-center text-white font-semibold px-5 py-2 rounded-2xl'>
                    Open Detail
                </Link>
            </div>
        </div>
    )
}

export default Index

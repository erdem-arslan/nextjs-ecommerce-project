"use client"
import React from 'react'
import { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Checkbox } from '@/components'
function Index()
{
    const [isSeriesVisible, setSeriesVisible] = useState(true)

    const handleOpenSeries = () =>
    {
        setSeriesVisible(!isSeriesVisible)
    }
    const [isRamVisible, setRamVisible] = useState(false)

    const handleOpenRam = () =>
    {
        setRamVisible(!isRamVisible)
    }
    return (
        <div>
            <div className='w-full rounded-tr-xl rounded-tl-xl bg-default-bg shadow-shadow-2 border pt-5'>
                <div className='py-3 border-b border-opacity-50 text-center'>
                    <h1 className='text-md'><span className='font-semibold'>450</span> Products are listed.</h1>
                </div>
                {/* series */}
                <div className='px-8 border-b border-opacity-50'>
                    <div onClick={handleOpenSeries} className='flex justify-between items-center py-2  cursor-pointer'>
                        <h1 className={`text-xl font-medium opacity-90 ${isSeriesVisible ? 'underline transition' : 'no-underline'}`}>Series</h1>
                        <MdKeyboardArrowRight size={25} className={`opacity-50 ${isSeriesVisible ? ' rotate-90 transition' : 'transition'} `} />
                    </div>
                    <div className={`px-5 ${isSeriesVisible ? ' lg:block' : 'hidden'}`}>
                    <Checkbox id='all-model' name='all-model' label='See All' />
                        <Checkbox id='i-15-p' name='i-15-p' label='iPhone 15 Pro' />
                        <Checkbox id='i-14-p' name='i-14-p' label='iPhone 14 Pro' />
                        <Checkbox id='i-14' name='i-14' label='iPhone 14' />
                        <Checkbox id='i-13' name='i-13' label='iPhone 13' />
                        <Checkbox id='i-se' name='i-se' label='iPhone SE' />
                    </div>
                </div>

                {/* Ram */}
                <div className='px-8 border-b border-opacity-50'>
                    <div onClick={handleOpenRam} className='flex justify-between items-center py-2  cursor-pointer'>
                        <h1 className={`text-xl font-medium opacity-90 ${isRamVisible ? 'underline' : 'no-underline transition'}`}>RAM</h1>
                        <MdKeyboardArrowRight size={25} className={`opacity-50 ${isRamVisible ? ' rotate-90 transition' : 'transition'} `} />
                    </div>
                    <div className={`px-5 ${isRamVisible ? 'block' : 'hidden'}`}>
                    <Checkbox id='all-ram' name='all-ram' label='See All' />
                        <Checkbox id='4gb' name='4gb' label='4 GB' />
                        <Checkbox id='8gb' name='8gb' label='8 GB' />
                        <Checkbox id='16gb' name='16gb' label='16 GB' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
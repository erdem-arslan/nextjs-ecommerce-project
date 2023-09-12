import React from 'react'


function Index({ title, price })
{
    return (
        <div className=' flex justify-between items-center border-b pb-2'>
            <h1 className='text-5xl font-semibold'>{title}</h1>
            <div className='flex items-center'>
                <p className='font-semibold text-3xl opacity-70'>{price}</p>
                <p className='ml-5 px-16 py-3 bg-[#0071e3] text-white font-normal text-md rounded-3xl cursor-pointer'>Add To Basket</p>
            </div>
        </div>
    )
}

export default Index
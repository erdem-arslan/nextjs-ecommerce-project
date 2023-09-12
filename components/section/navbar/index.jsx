import Link from 'next/link'
import React from 'react'
import { AiFillApple, AiOutlineSearch } from 'react-icons/ai'
import { BsBag, BsBagFill } from 'react-icons/bs'

function Index()
{
    return (
        <div className='w-full ' >
            <div className='w-full lg:w-3/5 mx-auto'>
                <ul className='flex justify-between items-center text-xs font-normal px-5 lg:px-0'>
                    <li className='px-2 py-4 '><Link href="/"><AiFillApple className='text-5xl lg:text-xl' /></Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">Store</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">Mac</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">iPad</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">iPhone</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">Watch</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">Vision</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">AirPods</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">TV & Home</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">Entertainment</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">Accessories</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/">Support</Link></li>
                    <li className='px-2 py-4 hidden lg:block'><Link href="/"><AiOutlineSearch size={20} /></Link></li>
                    <li className='px-2 py-4 text-3xl'><Link href="/"><BsBag className='text-4xl lg:text-xl' /></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Index
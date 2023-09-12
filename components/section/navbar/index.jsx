import Link from 'next/link'
import React from 'react'
import { AiFillApple, AiOutlineSearch } from 'react-icons/ai'
import { BsBag, BsBagFill } from 'react-icons/bs'

function Index()
{
    return (
        <div className='w-full ' >
            <div className='w-3/5 mx-auto'>
                <ul className='flex justify-between items-center text-xs font-normal '>
                    <li className='px-2 py-4'><Link href="/"><AiFillApple size={20} /></Link></li>
                    <li className='px-2 py-4'><Link href="/">Store</Link></li>
                    <li className='px-2 py-4'><Link href="/">Mac</Link></li>
                    <li className='px-2 py-4'><Link href="/">iPad</Link></li>
                    <li className='px-2 py-4'><Link href="/">iPhone</Link></li>
                    <li className='px-2 py-4'><Link href="/">Watch</Link></li>
                    <li className='px-2 py-4'><Link href="/">Vision</Link></li>
                    <li className='px-2 py-4'><Link href="/">AirPods</Link></li>
                    <li className='px-2 py-4'><Link href="/">TV & Home</Link></li>
                    <li className='px-2 py-4'><Link href="/">Entertainment</Link></li>
                    <li className='px-2 py-4'><Link href="/">Accessories</Link></li>
                    <li className='px-2 py-4'><Link href="/">Support</Link></li>
                    <li className='px-2 py-4'><Link href="/"><AiOutlineSearch size={20} /></Link></li>
                    <li className='px-2 py-4'><Link href="/"><BsBag size={20} /></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Index